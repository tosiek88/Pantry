import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { IProduct } from 'store/store';
import { upperCaseFirstLetter } from 'components/StoreListItem/StoreListItem';

interface ProductContentProp {
    product: IProduct;
}

export const ProductContent: React.FC<ProductContentProp> = ({ product }: ProductContentProp) => {
    return (
        <div style={{ width: '50%', marginLeft: '15px', marginRight: '15px' }}>
            <div style={{ margin: '0 auto', width: '180px' }}>
                <ListItemText
                    primary={upperCaseFirstLetter(product.name)}
                    secondary={`Minimum amount: ${product.minQty} [${product.unit}]`}
                />
                <p>
                    Quantity : <b>{product.qty}</b> [{product.unit}]
                </p>
            </div>
        </div>
    );
};
