import { createContext } from 'react';
interface HashTable<T> {
    [key: string]: T;
}
type IMutation<T> = (prev: T, payload: any) => T;
type IMutations<T> = HashTable<IMutation<T>>;
type IAction<T> = (ctx: IContext<T>, payload: any) => void;
type IActions<T> = HashTable<IAction<T>>;

export interface IContext<T> {
    store: T;
    mutations?: IMutations<T>;
    actions?: IActions<T>;
}

export interface IStore {
    counter: number;
}

const store: IStore = { counter: 0 };

const increment = (store: IStore, next: IStore) => {
    store.counter = store.counter + 1;
    return store;
};

const incrementActions: IAction<IStore> = ({ store, mutations }, payload) => {
    console.log(mutations);
    mutations.inc(store, payload);
};

export const context: IContext<IStore> = {
    store: store,
    mutations: { inc: increment },
    actions: { inc: incrementActions },
};

export const ItemsContext = createContext(context);
