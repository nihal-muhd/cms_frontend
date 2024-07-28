
import React from 'react';
import { Route, Redirect, Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />
    );
};

export default ProtectedRoute;
