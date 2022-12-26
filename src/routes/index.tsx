import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Root from '../pages/Root';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
    // protected route
  }
];

export const Routes = () => {
  const routing = useRoutes(routes);
  return routing;
};
