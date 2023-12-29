import { StyleProvider } from '@ant-design/cssinjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/themeContext';
import router from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyleProvider>
  </React.StrictMode>,
);
