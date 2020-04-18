import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from 'components/Category/Category';
import { ItemControl } from 'components/ItemControl/ItemControl';
import { ProductContent } from 'components/ListItemContent/ListItemContent';
import './main.scss';
import { IProduct } from 'store/store';
import { Link } from 'react-router-dom';

export interface StoreListItemProps extends IProduct {}

export const upperCaseFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.substring(1);
};

export const StoreListItem: React.FC<{ product?: StoreListItemProps }> = (props: { product?: StoreListItemProps }) => {
    return (
        <ListItem>
            <Link to={`/store/modal/${props.product.id}`}>
                <Category category={props.product.category} />
            </Link>
            <Link to={`/store/modal/${props.product.id}`}>
                <ProductContent product={props.product} />
            </Link>
            <ItemControl guid={props.product.id} />
        </ListItem>
    );
};
