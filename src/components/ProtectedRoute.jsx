import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ userType }) => {
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    console.log("Token:", token);
    console.log("Stored UserType:", storedUserType);
    console.log("Required UserType:", userType);

    if (!token) {
        console.log("No token, redirecting to /iniciar-sesion");
        return <Navigate to="/iniciar-sesion" />;
    }

    if (userType && userType !== storedUserType) {
        console.log("UserType mismatch, redirecting to /iniciar-sesion");
        return <Navigate to="/iniciar-sesion" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
