import React, { useContext, useReducer } from 'react';
import { PlusIcon, MinusIcon } from '../Icons';
import { Guid } from 'guid-typescript';
import { inc } from 'store/actions/pantryItemActions';

export const ItemControl: React.FC<{ guid: Guid }> = (props: { guid: Guid }) => {
    // const currentItem = pantryStateCtx.products.find((it) => {
    //     return it.id.toString() === props.guid.toString();
    // });

    return (
        <div style={{ marginRight: '10px' }}>
            <button>
                <PlusIcon />
            </button>
            <button>
                <MinusIcon />
            </button>
        </div>
    );
};
