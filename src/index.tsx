import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-config';
import { BrowserRouter as Router } from 'react-router-dom';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>
);
