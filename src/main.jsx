import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import JSXTutorial from './tutorial/JSXTutorial.jsx';
import JSXTutorial2 from './tutorial/JSXTutorial2.jsx';
import JSXTutorial3 from './tutorial/JSXTutorial3.jsx';
import JSXTutorial4 from './tutorial/JSXTutorial4.jsx';
import JSXTutorial5 from './tutorial/JSXTutorial5.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSXTutorial5 />
  </StrictMode>
);
