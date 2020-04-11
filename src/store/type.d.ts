export interface ICounter {
    counter: number;
}

export interface IAction<T> {
    type: string;
    payload: T;
}
