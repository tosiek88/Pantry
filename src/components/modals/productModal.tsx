import React, { useState } from 'react';
import { withRouter, useParams, Link } from 'react-router-dom';
import 'components/modals/productModal.scss';
import { Modal as ModalUI, Paper } from '@material-ui/core';

const Modal = () => {
    const url = useParams();

    return (
        <div role="button" className="modal-wrapper">
            <Paper elevation={3} className="modal">
                <div style={{ width: '100%', height: '25px' }}>
                    <Link to="/store">
                        <button>X</button>
                    </Link>
                </div>
                <p>CONTENT</p>
            </Paper>
        </div>
    );
};

export default withRouter(Modal);
