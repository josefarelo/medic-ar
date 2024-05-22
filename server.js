const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Escucha en el puerto
const app = express();
app.set("PORT", 5000);
app.listen(app.get("PORT"));
console.log("Servidor corriendo en el puerto", app.get("PORT"));

app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('databases/Users.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos:', err.message);
    } else {
        console.log('Base de datos abierta correctamente');
    }
});

// Función para verificar y crear una tabla si no existe
function createTableIfNotExists(tableName, tableDefinition) {
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${tableDefinition})`, (err) => {
        if (err) {
            console.error(`Error al crear o verificar la tabla ${tableName}:`, err.message);
        } else {
            if (err) {
                console.error(`Error al crear o verificar la tabla ${tableName}:`, err.message);
            } else {
                const action = err ? 'ha sido creada exitosamente.' : 'ya existe en la base de datos.';
                console.log(`La tabla ${tableName} ${action} `);
            }
        }
    });
}

// Verificar y crear las tablas
db.serialize(() => {
    createTableIfNotExists("nUsers", "nId INTEGER PRIMARY KEY AUTOINCREMENT, nName TEXT NOT NULL, nSurname TEXT NOT NULL, nDni VARCHAR(8) UNIQUE, nBirthdate TEXT NOT NULL, nEmail TEXT NOT NULL, nPassword TEXT NOT NULL");
    createTableIfNotExists("pUsers", "pId INTEGER PRIMARY KEY AUTOINCREMENT, pName TEXT NOT NULL, pSurname TEXT NOT NULL, pDni VARCHAR(8) UNIQUE, pTuition INTEGER UNIQUE, pBirthdate TEXT NOT NULL, pEmail TEXT NOT NULL, pPassword TEXT NOT NULL");
    createTableIfNotExists("pData", "pId INTEGER PRIMARY KEY, pDataName TEXT, pDataSurname TEXT, pDataSpecialty TEXT, pDataSocialWork TEXT, pDataAddress TEXT, pDataScore INTEGER, FOREIGN KEY (pId) REFERENCES pUsers(pId)");
});

// Ruta para registro de usuario normal
app.post('/register/user', (req, res) => {
    const { nName, nSurname, nDni, nBirthdate, nEmail, nPassword } = req.body;
    console.log("se recibio POST: "+ req.body);
    bcrypt.hash(nPassword, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Error al cifrar la contraseña' });
        }

        db.run('INSERT INTO nUsers (nName, nSurname, nDni, nBirthdate, nEmail, nPassword) VALUES (?, ?, ?, ?, ?, ?)', [nName, nSurname, nDni, nBirthdate, nEmail, hash], (err) => {
            console.log(err);
            if (err) {
                return res.status(500).json({ error: 'Error al registrar el usuario normal', details: err.message });
            }
            res.json({ message: 'Usuario normal registrado exitosamente' });
        });
    });
});

// Ruta para registro de usuario profesional
app.post('/register/professional', (req, res) => {
    const { pName, pSurname, pDni, pTuition, pBirthdate, pEmail, pPassword } = req.body;

    bcrypt.hash(pPassword, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Error al cifrar la contraseña' });
        }

        db.run('INSERT INTO pUsers (pName, pSurname, pDni, pTuition, pBirthdate, pEmail, pPassword) VALUES (?, ?, ?, ?, ?, ?, ?)', [pName, pSurname, pDni, pTuition, pBirthdate, pEmail, hash], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error al registrar el usuario profesional', details: err.message });
            }

            // Obtener el último pDataId insertado en la tabla pData
            db.get('SELECT MAX(pDataId) AS maxId FROM pData', (err, row) => {
                if (err) {
                    return res.status(500).json({ error: 'Error al obtener el último pDataId', details: err.message });
                }
                const nextPDataId = (row.maxId || 0) + 1; // Incrementar el último pDataId en 1

                // Insertar el próximo pDataId en la tabla pData
                db.run('INSERT INTO pData (pDataId) VALUES (?)', [nextPDataId], (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Error al registrar el pDataId en la tabla pData', details: err.message });
                    }
                    res.json({ message: 'Usuario profesional registrado exitosamente' });
                });
            });
        });
    });
});

//-----------------------------------------------------------------------------------------------

//----------------------------------------Inicio de sesión---------------------------------------
app.post('/login', (req, res) => {
    const { email, password, userType } = req.body;
    const table = userType === 'nRadio' ? 'nUsers' : 'pUsers';
    const emailColumn = userType === 'nRadio' ? 'nEmail' : 'pEmail';
    const passwordColumn = userType === 'nRadio' ? 'nPassword' : 'pPassword';
    const idColumn = userType === 'nRadio' ? 'nId' : 'pId'; // Seleccionar la columna de ID correcta

    db.get(`SELECT ${idColumn}, ${passwordColumn} FROM ${table} WHERE ${emailColumn} = ?`, [email], (err, row) => {
        if (err) {
            console.error('Error al buscar en la base de datos:', err.message);
            return res.status(500).json({ error: 'Error al buscar en la base de datos' });
        }
        if (row) {
            bcrypt.compare(password, row[passwordColumn], (err, result) => {
                if (err) {
                    console.error('Error al comparar contraseñas:', err.message);
                    return res.status(500).json({ error: 'Error al comparar contraseñas' });
                }
                if (result) {
                    const tokenPayload = {
                        email,
                        userType,
                        pId: row[idColumn] // Incluir el ID correspondiente en el token payload
                    };
                    const token = jwt.sign(tokenPayload, 'secret_key', { expiresIn: '1h' }); // Generar token JWT

                    return res.json({ message: 'Inicio de sesión exitoso', token });
                } else {
                    return res.status(401).json({ error: 'El email o la contraseña ingresados son incorrectos' });
                }
            });
        } else {
            return res.status(401).json({ error: 'El email o la contraseña ingresados son incorrectos' });
        }
    });
});

// Middleware para verificar el token JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó un token' });
    }

    // Verificar el token JWT
    jwt.verify(token.split(' ')[1], 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Token inválido' });
        }
        req.user = decoded; // decoded contiene el objeto { email, userType, pId }
        next();
    });
}

// Ruta protegida de ejemplo
app.get('/profile', verifyToken, (req, res) => {
    const { pId } = req.user; // Acceder al pId desde req.user
    res.json({ pId });
});


//----------------------------------------------------------------------------------------------

//--------------------------------------------Search--------------------------------------------

// Ruta para búsqueda de profesionales
app.post('/search', (req, res) => {
    const { specialty, socialWork } = req.body;
    let query = 'SELECT * FROM pData WHERE 1=1';
    const params = [];

    if (specialty && specialty !== '-') {
        query += ' AND pDataSpecialty = ?';
        params.push(specialty);
    }

    if (socialWork && socialWork !== '-') {
        query += ' AND pDataSocialWork = ?';
        params.push(socialWork);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error en la consulta:', err.message);
            return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
        }
        console.log(rows); // Mostrar los resultados en la consola del servidor
        res.json(rows);
    });
});

//----------------------------------------------------------------------------------------------

//--------------------------------------------Profile-------------------------------------------

// Ruta para guardar el perfil profesional en la tabla pData
app.post('/save-profile', verifyToken, (req, res) => {
    const { pDataName, pDataSurname, pDataSpecialty, pDataSocialWork, pDataAddress } = req.body;
    const { pId } = req.user; // Obtener el pId del token JWT

    // Verificar si pData para este pId ya existe
    db.get('SELECT * FROM pData WHERE pId = ?', [pId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Error al buscar en la base de datos' });
        }

        if (row) {
            // Actualizar los datos existentes si ya existe pData para este pId
            db.run('UPDATE pData SET pDataName = ?, pDataSurname = ?, pDataSpecialty = ?, pDataSocialWork = ?, pDataAddress = ? WHERE pId = ?',
                [pDataName, pDataSurname, pDataSpecialty, pDataSocialWork, pDataAddress, pId],
                (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Error al actualizar el perfil en la tabla pData', details: err.message });
                    }
                    res.json({ message: 'Los datos se han actualizado correctamente' });
                }
            );
        } else {
            // Insertar nuevos datos si no existe pData para este pId
            db.run('INSERT INTO pData (pId, pDataName, pDataSurname, pDataSpecialty, pDataSocialWork, pDataAddress) VALUES (?, ?, ?, ?, ?, ?)',
                [pId, pDataName, pDataSurname, pDataSpecialty, pDataSocialWork, pDataAddress],
                (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Error al guardar el perfil en la tabla pData', details: err.message });
                    }
                    res.json({ message: 'Los datos se han guardado correctamente' });
                }
            );
        }
    });
});

//----------------------------------------------------------------------------------------------