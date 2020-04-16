import { ProductState } from 'store/store';
import { Action } from 'types/type';
import { Reducer } from 'react';

export const pantryReducer: Reducer<ProductState, Action<ProductState>> = (state, action) => {
    const currentState = action.call(state, action.payload);
    window.localStorage.clear();
    window.localStorage.setItem('state', JSON.stringify(currentState));
    return currentState;
};

export const createReducer = () => pantryReducer;
