import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// Appの代わりにhelloをインポートする
//import App from './App';
import Hello from './components/Hello';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);