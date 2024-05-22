import React, { useState } from 'react';
import './Searcher.scss';

const Searcher = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedSocialWork, setSelectedSocialWork] = useState(null);

    // Definimos las opciones de especialidades y obras sociales
    const specialties = ['-', 'Cardiología', 'Obstetricia', 'Ginecología', 'Oftalmología', 'Odontología', 'Traumatología', 'Otorrinolaringología'];
    const socialWorks = ['-','Ninguna', 'Varias', 'Osde', 'Swiss Medical', 'Galeno', 'SanCorSalud'];

    const search = () => {
        fetch('/search/all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            return response.json();
        })
        .then(data => {
            console.log("Resultados de la búsqueda:", data);
        })
        .catch(error => {
            console.error('Error al realizar la búsqueda:', error.message);
        });
    };

    return (
        <div className="professional-searcher">
            <h1 className='searcher-title'>Buscá a tu Profesional.</h1>
            <div className="dropdown">
                <p className='p-searcher'>Especialidad:</p>
                <select value={selectedSpecialty || '-'} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                    {specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>{specialty}</option>
                    ))}
                </select>
            </div>
            <div className="dropdown">
            <p className='p-searcher'>Obra social:</p>
                <select value={selectedSocialWork || '-'} onChange={(e) => setSelectedSocialWork(e.target.value)}>
                    {socialWorks.map((socialWork, index) => (
                        <option key={index} value={socialWork}>{socialWork}</option>
                    ))}
                </select>
            </div>
            <button onClick={search} className="search-btn">Buscar</button>
        </div>
    );
};

export default Searcher;
