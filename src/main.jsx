import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import "./index.css";

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-d7zdwedximzf66ip.us.auth0.com"
    clientId="M2QmWIflAGZquNIQPzsAkpJ0LSsS2tGx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* Wrap App with Provider and pass the Redux store */}
      <App />
    
  </Auth0Provider>,
);
