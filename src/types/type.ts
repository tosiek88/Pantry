export type ActionFnc<T> = (state: T, payload?: T) => T;

export class Action<T> {
    constructor(fn: ActionFnc<T>, payload?: T) {
        this.call = fn;
    }
    payload: T;
    call: ActionFnc<T>;
}
