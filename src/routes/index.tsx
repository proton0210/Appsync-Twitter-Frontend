import Login from '../pages/Login';
import Root from '../pages/Root';
import Home from '../pages/Home';
import { Navigate } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/home',
    element: isLoggedIn ? <Home /> : <Navigate to="/login" />
  },
  {
    path: '/:screenName',
    element: isLoggedIn ? <Profile /> : <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default routes;
