import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarLogIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faList, faNotesMedical, faIdBadge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logoInv from './imagenes/logoInv.png';
import LogoutButton from './LogoutButton';

export default function NavIn() {

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
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faHouseUser } className='nav-in-icon' /><Link to="/inicio" className='nav-in-link'>Inicio</Link></li>    
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faList } className='nav-in-icon' /><Link to="/mis-turnos" className='nav-in-link'>Turnos</Link></li>   
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faNotesMedical } className='nav-in-icon' /><Link to="/mi-historial-de-atencion" className='nav-in-link'>Historial</Link></li>
                    <li className='nav-in-li'><FontAwesomeIcon icon={ faIdBadge } className='nav-in-icon' /><Link to="/mi-perfil" className='nav-in-link'>Perfil</Link></li>
                    <li className='nav-in-li'>
                        <FontAwesomeIcon icon={ faRightFromBracket } className='nav-in-icon' />
                        <LogoutButton onLogout={handleLogout} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}