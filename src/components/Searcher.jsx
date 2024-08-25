import React, { useState } from 'react';
import './Searcher.scss';

const Searcher = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('-');
    const [selectedSocialWork, setSelectedSocialWork] = useState('-');
    const [results, setResults] = useState([]);

    const specialties = ['-', 'Cardiología', 'Obstetricia', 'Ginecología', 'Oftalmología', 'Odontología', 'Traumatología', 'Otorrinolaringología', 'Hematología'];
    const socialWorks = ['-','Ninguna', 'Varias', 'Osde', 'Swiss Medical', 'Galeno', 'SanCorSalud'];

    const search = async () => {
        const query = {
            specialty: selectedSpecialty,
            socialWork: selectedSocialWork,
        };

        try {
            const response = await fetch('http://localhost:5000/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query),
            });

            if (response.ok) {
                const data = await response.json();
                setResults(data);
                console.log(data); // Mostrar los resultados en la consola del navegador
            } else {
                console.error('Error en la consulta a la base de datos');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="professional-searcher">
            <h1 className='searcher-title'>Buscá a tu Profesional.</h1>
            <div className="dropdown">
                <p className='p-searcher'>Especialidad:</p>
                <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                    {specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>{specialty}</option>
                    ))}
                </select>
            </div>
            <div className="dropdown">
                <p className='p-searcher'>Obra social:</p>
                <select value={selectedSocialWork} onChange={(e) => setSelectedSocialWork(e.target.value)}>
                    {socialWorks.map((socialWork, index) => (
                        <option key={index} value={socialWork}>{socialWork}</option>
                    ))}
                </select>
            </div>
            <button onClick={search} className="search-btn">Buscar</button>

            {results.length > 0 && (
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Obra Social</th>
                            <th>Dirección</th>
                            <th>Puntuación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.pId}>
                                <td>{result.pDataName}</td>
                                <td>{result.pDataSurname}</td>
                                <td>{result.pDataSpecialty}</td>
                                <td>{result.pDataSocialWork}</td>
                                <td>{result.pDataAddress}</td>
                                <td>{result.pDataScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Searcher;
