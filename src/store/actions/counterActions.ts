import { Action } from 'types/type';
import { ICounter } from 'store/store';

export const inc = new Action<ICounter>((state, payload?) => {
    return { ...state, counter: state.counter + 1 };
});

export const dec = new Action<ICounter>((state, payload?) => {
    return { ...state, counter: state.counter - 1 };
});
