import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarPLogIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faList, faNotesMedical, faIdBadge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logoInv from './imagenes/logoInv.png';
import LogoutButton from './LogoutButton';

export default function NavPIn() {

    const handleLogout = () => {
        console.log('Cerrando sesión...');
    };

    return (
        <div className='nav-container'>
            <nav className='nav-bar-in'>
                <div className="logo-container">
                    <img 
                        src={logoInv}
                        alt="logo-app"
                        className="logo" 
                    />
                </div>
                <ul className='nav-in-links'>
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faHouseUser } className='nav-in-icon' /><Link to="/inicio-profesional" className='nav-in-link'>Inicio</Link></li>    
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faList } className='nav-in-icon' /><Link to="/turnos" className='nav-in-link'>Turnos</Link></li>   
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faNotesMedical } className='nav-in-icon' /><Link to="/historial-de-pacientes" className='nav-in-link'>Historiales</Link></li>
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faIdBadge } className='nav-in-icon' /><Link to="/perfil-profesional" className='nav-in-link'>Perfil</Link></li>
                    <li className='nav-in-li'>
                        <FontAwesomeIcon icon={ faRightFromBracket } className='nav-in-icon' />
                        <LogoutButton onLogout={handleLogout} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}