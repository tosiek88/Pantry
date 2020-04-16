import { createContext } from 'react';
import { Guid } from 'guid-typescript';

export interface ICounter {
    counter: number;
}

export interface ICategory {
    id: Guid;
    name: string;
    iconSrc: string | undefined | null;
}

export interface IProduct {
    id: Guid;
    name: string;
    qty: number;
    minQty: number;
    unit: string;
    category: ICategory;
}
export interface ProductState {
    counter: number;
    products: IProduct[];
}

export let localStorage = JSON.parse(window.localStorage.getItem('state'));
let initialStateProducts: ProductState = {
    counter: 0,
    products: [
        {
            id: Guid.create(),
            name: 'Carrot',
            qty: 0,
            minQty: 5,
            unit: 'kg',
            category: {
                id: Guid.create(),
                name: 'vegetables',
                iconSrc: null,
            },
        },

        {
            id: Guid.create(),
            name: 'Water',
            qty: 0,
            minQty: 5,
            unit: 'l',
            category: {
                id: Guid.create(),
                name: 'Drinks',
                iconSrc: null,
            },
        },
    ],
};

export const initState = localStorage === null ? initialStateProducts : localStorage;

export const GlobalContext = createContext(initState);
