import { ICounter, IAction } from '../type';
export const reducer = (state: ICounter, action: IAction<ICounter>): ICounter => {
    let currentState = state;
    switch (action.type) {
        case 'INC':
            currentState = { ...state, counter: state.counter + 1 };
            break;
        case 'DEC':
            currentState = { ...state, counter: state.counter - 1 };
            break;
    }
    window.localStorage.clear();
    window.localStorage.setItem('state', JSON.stringify(currentState));
    return currentState;
};
