import { Paper } from '@material-ui/core';
import 'components/modals/productModal.scss';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NewProductModal = (): JSX.Element => {
    return (
        <div role="button" className="modal-wrapper">
            <Paper elevation={3} className="modal">
                <div style={{ width: '100%', height: '25px' }}>
                    <Link to="/">
                        <button>X</button>
                    </Link>
                </div>
                <div style={{ padding: '20px' }}>
                    <p>test</p>
                </div>
            </Paper>
        </div>
    );
};

export default withRouter(NewProductModal);
