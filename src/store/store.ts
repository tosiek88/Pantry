import { createContext } from 'react';
import { ICounter } from './type';

export const localStorage = JSON.parse(window.localStorage.getItem('state'));
export const initialState: ICounter = localStorage === null ? { counter: 0 } : localStorage;
export const GlobalContext = createContext(initialState);
