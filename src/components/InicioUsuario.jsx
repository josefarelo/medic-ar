import React, { useState } from 'react';
import './InicioUsuario.scss';
import NavIn from './NavBarLogIn';
import Seacher from './Searcher';
import Map from './Map';
import medicSearcherMain from './imagenes/medicSearcherMain.jpg';

export default function InicioUsuario() {
    const [searchResults, setSearchResults] = useState([]);

    // Función para manejar los resultados de la búsqueda desde Searcher.jsx
    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    return (
        <>
            <NavIn />

            <div className='main-visual-container'>
                <div className='search-img-container'>
                    <img
                        src={medicSearcherMain}
                        className='medic-search-img'
                        alt='busqueda-de-medicos'
                    />
                </div>
                <div className='searcher-container'>
                    <Seacher onSearchResults={handleSearchResults} /> 
                </div>
            </div>

            <div className='search-result-title'>
                <p className='search-result-text'>Encontrá al profesional acá</p>
            </div>
            <div className='search-results-container'>
                <div className='profesional-results'>
                </div>
                <div className='main-map-container'>
                    <Map />
                </div>
            </div>
        </>
    );
}
