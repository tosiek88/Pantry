import { Paper } from '@material-ui/core';
import 'components/Modals/ProductModal.scss';
import React, { useContext } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';
import { GlobalContext, IProduct } from 'store/store';

const ProductModal = (): JSX.Element => {
    const params: { id?: string } = useParams();
    const { products } = useContext(GlobalContext).globalState;
    const modalProduct: IProduct = products.find((product: IProduct) => product.id === params.id);

    return (
        <div role="button" className="modal-wrapper">
            <Paper elevation={3} className="modal">
                <div style={{ width: '100%', height: '25px' }}>
                    <Link to="/">
                        <button>X</button>
                    </Link>
                </div>
                <div style={{ padding: '20px' }}>
                    <p>{modalProduct.name}</p>
                </div>
            </Paper>
        </div>
    );
};

export default withRouter(ProductModal);
