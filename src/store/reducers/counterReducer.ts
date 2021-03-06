import { Action } from 'types/type';
import { ICounter } from 'store/store';
import { Reducer } from 'react';

export const betterReducer: Reducer<ICounter, Action<ICounter>> = (state, action): ICounter => {
    const currentState = action.call(state, action.payload);
    window.localStorage.clear();
    window.localStorage.setItem('state', JSON.stringify(currentState));
    return currentState;
};
