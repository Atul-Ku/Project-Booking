import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline } from '@mui/material';
// import App from './App';
// import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <CssBaseline />
        <div onContextMenu={(e) => e.preventDefault()}>
          <Home />
        </div>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
