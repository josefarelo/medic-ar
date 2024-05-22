import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.scss';
import logo from './imagenes/logo.png';


export default function FooterBar() {
    
    return (
        <footer>
            <div className="footer">
                <div className='footer-top'>
                    <img 
                    src={logo}
                    alt='logo-app'
                    className='logo'
                    />
                    <div className='links'>
                        <div className='left-links'>
                            <h2>Sobre MedicAR</h2>
                            <ul>
                                <li><Link to="/conoce-medicar" className="footer-link">Conocé MedicAR</Link></li>
                                <li><Link to="/terminos-y-condiciones-de-registro" className='footer-link'>Términos y condiciones de registro</Link></li>
                                <li><Link to="/terminos-y-condiciones-de-registro-como-profesional" className='footer-link'>Términos y condiciones de registro como profesional</Link></li>
                                <li><Link to="/registrarse" className='footer-link'>Formulario de registro</Link></li>
                            </ul>
                        </div>
                        <div className='right-links'>
                            <h2>Información adicional</h2>
                            <ul>
                                <li><Link to="/acuerdo-con-el-usuario" className='footer-link'>Acuerdo con el usuario</Link></li>
                                <li><Link to="/politica-de-privacidad" className='footer-link'>Política de privacidad</Link></li>
                                <li><Link to="/codigo-de-conducta" className='footer-link'>Código de conducta</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <span>©MedicAR 2024 - José Farelo - Proyecto para testear - Esta página no está afiliada a ninguna entidad de medicina o similar.</span>
                </div>
            </div>
        </footer>
    );   
}