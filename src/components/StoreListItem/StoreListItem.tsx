import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from 'components/Category/Category';
import { ItemControl } from 'components/ItemControl/ItemControl';
import { ProductContent } from 'components/ListItemContent/ListItemContent';
import './main.scss';
import { IProduct } from 'store/store';

export interface StoreListItemProps extends IProduct {}

export const upperCaseFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.substring(1);
};

export const StoreListItem: React.FC<{ product?: StoreListItemProps }> = (props: { product?: StoreListItemProps }) => {
    return (
        <ListItem>
            <Category category={props.product.category} />
            <ProductContent product={props.product} />
            <ItemControl guid={props.product.id} />
        </ListItem>
    );
};
