import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { IProduct } from 'store/store';

interface ProductContentProp {
  product: IProduct;
}

export const ProductContent: React.FC<ProductContentProp> = ({ product }: ProductContentProp) => {
  const name = product.name.charAt(0).toUpperCase() + product.name.substring(1);
  return (
    <div style={{ width: '50%', marginLeft: '15px', marginRight: '15px' }}>
      <div style={{ margin: '0 auto', width: '180px' }}>
        <ListItemText primary={name} secondary={`Minimum qt: ${product.minQty}`} />
        <p>
          Quantity : <b>{product.qty}</b>
        </p>
      </div>
    </div>
  );
};
