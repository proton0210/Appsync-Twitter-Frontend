import { Amplify } from 'aws-amplify';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { useRoutes } from 'react-router';
import routes from './routes';
import { useSelector } from 'react-redux';

export default function App() {
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  console.log('loggedIn', loggedIn);
  console.log('user', user);
  const routing = useRoutes(routes(loggedIn));

  return <>{routing}</>;
}
