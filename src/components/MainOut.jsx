import React from 'react';
import { Link } from 'react-router-dom';
import './MainOut.scss';
import imagenInicio from './imagenes/imagenInicio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import NavOut from "./NavBarLogOut";
import FooterBar from './FooterBar';


export default function MainOut() {
    return (
        <>
    {/*--------------------NAV START--------------------*/}
            { <NavOut /> }
    {/*--------------------NAV END--------------------*/}

    {/*--------------------MAIN START--------------------*/}
            <main className="app-main">
                <div className='button-container'>
                    <button className="register">
                        <FontAwesomeIcon icon={faUserPlus} className='button-icon' />
                        <Link to='/registrarse' className='button-link'>Registrarse</Link>
                    </button>                    
                    <button className="log-in">
                        <FontAwesomeIcon icon={faUser} className='button-icon' />
                        <Link to='/iniciar-sesion' className='button-link'>Iniciar Sesión</Link>
                    </button>
                </div>

                <div className='title-container'>
                    <h1 className='title'>Encontrá la mejor atención</h1>
                    <h2 className='second-title'>Tu médico esta acá.</h2>
                </div>

                <div className='center-container'>
                    <img
                        src={imagenInicio}
                        alt="imagen-de-un-doctor"
                        className='imagen-inicio' 
                    />
                    <div className='main-text'>
                        <h2 className='text-top'>Buscá al profesional que necesites</h2>
                        <h2 className='text-mid'>Por reputación</h2>
                        <h2 className='text-mid'>Por obra social</h2>
                        <h2 className='text-mid'>Por cercanía</h2>
                        <h2 className='text-bot'>Elegí lo mejor para vos</h2>
                    </div>
                </div>
            </main>
    {/*--------------------MAIN END--------------------*/}

    {/*--------------------FOOTER START--------------------*/}
            { <FooterBar /> }
    {/*--------------------FOOTER END--------------------*/}
        </>
    );
}