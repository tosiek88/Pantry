import { createContext } from 'react';
import { Guid } from 'guid-typescript';

export interface ICounter {
    counter: number;
}

export interface ICategory {
    id: string;
    name: string;
    iconSrc: string | undefined | null;
}

export interface IProduct {
    id: string;
    name: string;
    qty: number;
    minQty: number;
    unit: string;
    category: ICategory;
}
export interface ProductState {
    products: IProduct[];
}

export let localStorage = JSON.parse(window.localStorage.getItem('state'));
let initialStateProducts: ProductState = {
    products: [
        {
            id: Guid.raw(),
            name: 'Carrot',
            qty: 0,
            minQty: 5,
            unit: 'kg',
            category: {
                id: Guid.raw(),
                name: 'vegetables',
                iconSrc: null,
            },
        },

        {
            id: Guid.raw(),
            name: 'Water',
            qty: 0,
            minQty: 5,
            unit: 'l',
            category: {
                id: Guid.raw(),
                name: 'drinks',
                iconSrc: null,
            },
        },
    ],
};

export const initState = localStorage === null ? initialStateProducts : localStorage;

export const GlobalContext = createContext(initState);
