import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from 'components/Category/Category';
import { ItemControl } from 'components/ItemControl/ItemControl';
import { ProductContent } from 'components/ListItemContent/ListItemContent';
import './main.scss';
import { IProduct, GlobalContext } from 'store/store';
import { inc } from 'store/actions/pantryItemActions';
export interface StoreListItemProps extends IProduct {}

export const StoreListItem: React.FC<{ product?: StoreListItemProps; counter: number }> = (props: {
    product?: StoreListItemProps;
    counter: number;
}) => {
    const ctx = useContext(GlobalContext);

    return (
        <ListItem>
            <button
                onClick={() => {
                    ctx.dispatch(inc);
                }}
                style={{ color: 'black' }}>
                test
            </button>
            {/*     <Category category={props.product.category} /> */}
            {/*     <ProductContent product={props.product} /> */}
            {/*     <ItemControl guid={props.product.id} /> */}
        </ListItem>
    );
};
