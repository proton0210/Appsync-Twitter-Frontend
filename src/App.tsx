import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-config';
import { Routes } from './routes';
Amplify.configure(awsExports);

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
