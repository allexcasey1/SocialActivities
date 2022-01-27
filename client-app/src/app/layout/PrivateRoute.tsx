import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../stores/store';

export function PrivateRoute({children}: any) {
    const {userStore: {isLoggedIn}} = useStore();
    return isLoggedIn ? children : <Navigate to="/" />;
  }