import List from '@material-ui/core/List';
import { Product } from 'components/Product/Product';
import React, { useContext } from 'react';
import { GlobalContext, IProduct } from 'store/store';

const ProductsList = () => {
    let { products } = useContext(GlobalContext).globalState;

    products = products.map((it: IProduct) => {
        return <Product key={it.id} product={it} />;
    });
    return (
        <>
            <List>{products}</List>
            <Product />
        </>
    );
};

export default ProductsList;
