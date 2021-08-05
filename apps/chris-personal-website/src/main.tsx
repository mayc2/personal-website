import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { GlobalStyle } from './app/common/styles/GlobalStyle';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
