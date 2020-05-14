import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from 'components/Category/Category';
import { ItemControl } from 'components/ItemControl/ItemControl';
import { ProductContent } from 'components/ProductContents/ProductContent';
import { NewProductContent } from 'components/ProductContents/NewProductContent';
import './Product.scss';
import { IProduct } from 'store/store';
import { Link } from 'react-router-dom';

export const upperCaseFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.substring(1);
};

export const Product: React.FC<{ product?: IProduct }> = ({ product }: { product?: IProduct }) => {
    const content = product ? (
        <>
            <Link to={`/store/product/${product.id}`}>
                <Category category={product.category} />
                <ProductContent product={product} />
            </Link>
            <ItemControl guid={product.id} />
        </>
    ) : (
        <Link to={`/store/new-product`}>
            <Category />
            <NewProductContent />
        </Link>
    );
    return <ListItem>{content}</ListItem>;
};
