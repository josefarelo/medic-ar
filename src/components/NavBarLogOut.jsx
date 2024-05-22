import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarLogOut.scss';
import logoInv from './imagenes/logoInv.png';

export default function NavOut() {
    
    return (

            <div className="nav-container">
                <nav className="nav-bar">
                    <div className="logo-container">
                        <img 
                            src={logoInv}
                            alt="logo-app"
                            className="logo" 
                        />
                    </div>
                    <ul className="nav-out-links">
                        <li className='nav-out-li'><Link to="/" className="nav-out-link">Inicio</Link></li>
                        <li className='nav-out-li'><Link to="/conoce-medicar" className="nav-out-link">Conocé MedicAR</Link></li>
                        <li className='nav-out-li'><Link to="/informacion-al-usuario" className="nav-out-link">Información al Usuario</Link></li>
                        <li className='nav-out-li'><Link ito="/informacion-al-profesional" className="nav-out-link">Información al Profesional</Link></li>
                    </ul>
                </nav>
            </div>

    );
}
