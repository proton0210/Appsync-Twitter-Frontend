import { Amplify } from 'aws-amplify';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { useRoutes } from 'react-router';
import routes from './routes';
import { useSelector } from 'react-redux';

export default function App() {
  const { loggedIn } = useSelector((state: any) => state.auth);

  const routing = useRoutes(routes(loggedIn));

  return <>{routing}</>;
}
