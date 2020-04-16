import { Action } from 'types/type';
import { ProductState, IProduct } from 'store/store';

export const incrementAmount = new Action<ProductState>((state, payload?) => {
    const updatedProduct: IProduct[] = [];
    for (let it of state.products) {
        if (it.id === payload.products[0].id) {
            updatedProduct.push({ ...payload.products[0], qty: payload.products[0].qty + 1 });
        } else {
            updatedProduct.push(it);
        }
    }

    return { ...state, products: updatedProduct };
});

export const decrementAmount = new Action<ProductState>((state, payload?) => {
    const updatedProduct: IProduct[] = [];
    for (let it of state.products) {
        if (it.id === payload.products[0].id) {
            updatedProduct.push({ ...payload.products[0], qty: payload.products[0].qty - 1 });
        } else {
            updatedProduct.push(it);
        }
    }

    return { ...state, products: updatedProduct };
});
