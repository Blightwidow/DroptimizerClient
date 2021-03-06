import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import { AUTH_CLIENT_ID, AUTH_DOMAIN } from './config';

ReactDOM.render(
  <Auth0Provider
    domain={AUTH_DOMAIN}
    clientId={AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    audience="https://api.loot.odrel.com"
    scope="admin write:simc"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
