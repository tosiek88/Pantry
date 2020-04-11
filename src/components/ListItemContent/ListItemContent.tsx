import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export const ListItemContent: React.FC<{ qty?: number }> = ({ qty }) => {
  return (
    <div style={{ width: '50%', marginLeft: '15px', marginRight: '15px' }}>
      <div style={{ margin: '0 auto', width: '180px' }}>
        <ListItemText primary="Carrot" secondary="Jan 9, 2014" />
        <p>
          Quantity : <b>0</b>
        </p>
      </div>
    </div>
  );
};
