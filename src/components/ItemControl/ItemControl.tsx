import React from 'react';
import { PlusIcon, MinusIcon } from '../Icons';
import { Guid } from 'guid-typescript';

export const ItemControl: React.FC<{ id: Guid }> = ({ id: Guid }) => {
  return (
    <div style={{ marginRight: '10px' }}>
      <PlusIcon />
      <MinusIcon />
    </div>
  );
};
