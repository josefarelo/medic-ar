import React, { useState, useEffect } from 'react';
import './PerfilProfesional.scss';
import NavPIn from './NavBarPLogIn';
import docProfile from './imagenes/docProfile.png';

export default function PerfilProfesional() {
    const [pPName, setPPName] = useState("");
    const [pPSurname, setPPSurname] = useState("");
    const [pPSpecialty, setPPSpecialty] = useState("");
    const [pPSocialWork, setPPSocialWork] = useState("");
    const [pPAddress, setPPAddress] = useState("");
    const [saveMessage, setSaveMessage] = useState("");
    const [token, setToken] = useState(""); // Estado para almacenar el token JWT

    // Función para obtener el token JWT del localStorage o del estado
    const getToken = () => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    const handleSaveProfileClick = () => {
        const profileData = {
            pDataName: pPName,
            pDataSurname: pPSurname,
            pDataSpecialty: pPSpecialty,
            pDataSocialWork: pPSocialWork,
            pDataAddress: pPAddress,
            pDataScore: 0,
        };

        fetch('http://localhost:5000/save-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Incluir el token JWT en la cabecera
            },
            body: JSON.stringify(profileData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Perfil guardado exitosamente');
                alert('Los datos se han guardado correctamente');
            } else {
                console.error('Error al guardar el perfil');
            }
        })
        .catch(error => {
            console.error('Error al guardar el perfil:', error);
        });
    }

    return(
        <>
            <nav className='nav-professional'>
                <NavPIn />
            </nav>
            <div className='professional-profile-title-container'>
                <h1 className='professional-profile-title'>Perfil Profesional</h1>
                <h3 className='professional-profile-subtitle'>Llená tu perfil profesional para que los usuarios puedan conocerte</h3>
            </div>
            <div className='professional-profile-form-container'>
                <form className="professional-profile-form">
                    <div className='professional-profile-img-container'>
                        <img
                            src={ docProfile }
                            className='professional-profile-img'
                            alt='imagen-del-profesional'
                        />
                    </div>
                    <div className='profile-data-container'>
                        <div>
                            <label htmlFor="ppspecialty" className='professional-input-label'>Especialidad: </label>
                            <select
                                className='professional-profile-input'
                                id='ppspecialty'
                                value={ pPSpecialty }
                                onChange={e => setPPSpecialty(e.target.value)}
                            >
                                <option value="Cardiología">Cardiología</option>
                                <option value="Obstetricia">Obstetricia</option>
                                <option value="Ginecología">Ginecología</option>
                                <option value="Traumatología">Traumatología</option>
                                <option value="Odontología">Odontología</option>
                                <option value="Oftalmología">Oftalmología</option>
                                <option value="Otorrinolaringología">Otorrinolaringología</option>
                                <option value="Hematología">Hematología</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ppname" className='professional-input-label'>Nombres: </label>
                            <input 
                                className='professional-profile-input'
                                type='text'
                                id='ppname'
                                placeholder='Nombres'
                                value={ pPName }
                                onChange={e => setPPName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ppsurname" className='professional-input-label'>Apellidos: </label>
                            <input 
                                className='professional-profile-input'
                                type='text'
                                id='ppsurname'
                                placeholder='Apellidos'
                                value={ pPSurname }
                                onChange={e => setPPSurname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ppsocialwork" className='professional-input-label'>Obra Social: </label>
                            <select
                                className='professional-profile-input'
                                id='ppsocialwork'
                                value={ pPSocialWork }
                                onChange={e => setPPSocialWork(e.target.value)}
                            >
                                <option value="Ninguna">Ninguna</option>
                                <option value="Varias">Varias</option>
                                <option value="Osde">Osde</option>
                                <option value="Swiss Medical">Swiss Medical</option>
                                <option value="Galeno">Galeno</option>
                                <option value="SanCorSalud">SanCor Salud</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ppaddress" className='professional-input-label'>Dirección: </label>
                            <input 
                                className='professional-profile-input'
                                type='text'
                                id='ppaddress'
                                placeholder='Dirección'
                                value={ pPAddress }
                                onChange={e => setPPAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='display-text-container'>
                        <p id='displayText'>Especialista en {pPSpecialty}</p>
                        <p id='displayText'>Dr/a. {pPSurname}, {pPName}</p>
                        <p id='displayText'>Obra social: {pPSocialWork}</p>
                        <p id='displayText'>Dirección: {pPAddress}</p>
                    </div>
                    <div className='profile-button-container'>
                        <input 
                            className='save-profile-button'
                            type='button'
                            value='Guardar'
                            onClick={handleSaveProfileClick}
                        />
                    </div>
                </form>
                {saveMessage && (
                    <div className="save-message">
                        {saveMessage}
                    </div>
                )}
            </div>
        </>
    )
}
