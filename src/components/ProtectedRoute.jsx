import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ userType, ...rest }) => {
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    if (!token) {
        return <Navigate to="/iniciar-sesion" />;
    }

    if (userType && userType !== storedUserType) {
        return <Navigate to="/iniciar-sesion" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
