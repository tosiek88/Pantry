import React from 'react';
import { PlusIcon, MinusIcon } from '../Icons';
import { ItemsContext } from '../../App';

export const ItemControl = () => {
  return (
    <div style={{ marginRight: '10px' }}>
      <PlusIcon />
      <MinusIcon />
    </div>
  );
};
