import List from '@material-ui/core/List';
import { StoreListItem } from 'components/StoreListItem/StoreListItem';
import React, { useContext } from 'react';
import { GlobalContext, IProduct } from 'store/store';
import styled from 'styled-components';

const Button = styled.button`
    color: red;
`;

const Products = () => {
    let { products } = useContext(GlobalContext).globalState;

    products = products.map((it: IProduct) => {
        return <StoreListItem key={it.id} product={it} />;
    });
    return (
        <>
            <Button>test</Button>
            <List>{products}</List>
        </>
    );
};

export default Products;
