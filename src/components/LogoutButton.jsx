import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.scss';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        navigate('/');
    };

    return (
        <button className='log-out-button'
            onClick={handleLogout}>
                Cerrar Sesión
        </button>
    );
};
// <Link to="/" className='nav-in-link'>Cerrar sesión</Link>
export default LogoutButton;
