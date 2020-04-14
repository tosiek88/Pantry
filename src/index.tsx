import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './helpers/style';
import { initState, GlobalContext } from './store/store';

ReactDOM.render(
  <GlobalContext.Provider value={initState}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </GlobalContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
