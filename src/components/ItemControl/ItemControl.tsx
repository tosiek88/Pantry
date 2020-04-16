import React, { useContext } from 'react';
import { PlusIcon, MinusIcon } from '../Icons';
import { GlobalContext, IProduct, ProductState } from 'store/store';
import { incrementAmount, decrementAmount } from 'store/actions/pantryItemActions';
import { Action } from 'types/type';

export const ItemControl: React.FC<{ guid: string }> = (props: { guid: string }) => {
    const { globalState, dispatch } = useContext<{
        globalState: ProductState;
        dispatch: React.Dispatch<Action<ProductState>>;
    }>(GlobalContext);

    const currentItem = globalState.products.find((it: IProduct) => {
        return it.id === props.guid;
    });

    return (
        <div style={{ marginRight: '10px' }}>
            <button
                onClick={() => {
                    dispatch({ call: incrementAmount.call, payload: { products: [currentItem] } });
                }}>
                <PlusIcon />
            </button>
            <button
                onClick={() => {
                    dispatch({ call: decrementAmount.call, payload: { products: [currentItem] } });
                }}>
                <MinusIcon />
            </button>
        </div>
    );
};
