import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/style.scss'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
