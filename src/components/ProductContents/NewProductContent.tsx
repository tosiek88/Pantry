import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export const NewProductContent: React.FC = () => {
    return (
        <div style={{ width: '50%', marginLeft: '15px', marginRight: '15px' }}>
            <div style={{ margin: '0 auto', width: '180px' }}>
                <ListItemText primary={`Create Item`} />
            </div>
        </div>
    );
};
