import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // Import et

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider> {/* Uygulamayı sarmala */}
            <App />
        </HelmetProvider>
    </React.StrictMode>,
);