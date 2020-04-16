import { Action } from 'types/type';
import { ProductState, IProduct } from 'store/store';

export const incrementAmount = new Action<ProductState>((state, payload?) => {
    payload.products[0].qty++;
    const updatedProduct: IProduct[] = [];
    for (let it of state.products) {
        if (it.id === payload.products[0].id) {
            updatedProduct.push(payload.products[0]);
        } else {
            updatedProduct.push(it);
        }
    }

    return { ...state, products: updatedProduct };
});

export const inc = new Action<ProductState>((state, payload?) => {
    return { ...state, counter: state.counter + 1 };
});
