import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { IProduct } from 'store/store';

interface ProductContentProp {
    product: IProduct;
}

const upperCaseFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.substring(1);
};

export const ProductContent: React.FC<ProductContentProp> = ({ product }: ProductContentProp) => {
    return (
        <div style={{ width: '50%', marginLeft: '15px', marginRight: '15px' }}>
            <div>{product.qty}</div>
            <div style={{ margin: '0 auto', width: '180px' }}>
                <ListItemText
                    primary={product.name}
                    secondary={`Minimum amount: ${product.minQty} [${product.unit}]`}
                />
                <p>
                    Quantity : <b>{product.qty}</b> [{product.unit}]
                </p>
            </div>
        </div>
    );
};
