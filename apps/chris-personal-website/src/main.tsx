import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import { GlobalStyle } from './app/common/styles/GlobalStyle';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
