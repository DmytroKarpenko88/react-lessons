import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { theme } from 'constants';
import { ThemeProvider } from '@emotion/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
