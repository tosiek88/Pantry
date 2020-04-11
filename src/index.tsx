import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './helpers/style';
import { createContext } from 'react';

export interface ICounter {
  counter: number;
}
const localStorage = JSON.parse(window.localStorage.getItem('state'));
const initialState: ICounter = localStorage === null ? { counter: 0 } : localStorage;
export const GlobalContext = createContext(initialState);

ReactDOM.render(
  <GlobalContext.Provider value={initialState}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </GlobalContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
