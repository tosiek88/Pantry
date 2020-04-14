import React from 'react';
import { ICategory } from 'store/store';

interface CategoryProps {
  category: ICategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div style={{ width: '80px' }}>
        <img
          style={{ display: 'block', margin: 'auto', width: '64px' }}
          src={category.iconSrc}
          alt={category.name}
        />
      </div>
      <div>
        <p>{category.name}</p>
      </div>
    </div>
  );
};
