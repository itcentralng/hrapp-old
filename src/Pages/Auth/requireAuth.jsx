import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
    const token = sessionStorage.getItem("token");
    return token ? children : <Navigate to="/" />;
}
