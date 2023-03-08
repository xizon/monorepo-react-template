import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const root = createRoot(
  document.getElementById('root_plugin') as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
