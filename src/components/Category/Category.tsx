import React from 'react';
import vegetables from '../../asset/icons/PNG  64 x 64/vegetables.png';
import dairy from '../../asset/icons/PNG  64 x 64/dairy.png';

interface CategoryProps {
  label: string;
  src?: string;
}

export const CATEGORY = {
  VEGETABLES: 'VEGETABLES',
  FRUIT: 'FRUIT',
  MEAT: 'MEAT',
  DRY: 'DRY',
  DRINKS: 'DRINK',
  SWEETS: 'SWEETS',
  FLOUR: 'FLOUR',
  PASTA: 'PASTA',
  JARS: 'JARS',
  COFFY: 'COFFY',
  SAUSAGE: 'SAUSAGE',
  BREAD: 'BREAD',
};

type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

export const Category: React.FC<CategoryProps> = ({ label, src }) => {
  return (
    <div style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div style={{ width: '80px' }}>
        <img
          style={{ display: 'block', margin: 'auto', width: '64px' }}
          src={src}
          alt="vegetables"
        />
      </div>
      <div>
        <p>{label}</p>
      </div>
    </div>
  );
};

export const VegetableCategory = () => (
  <Category label={'Vegetable'} src={vegetables} />
);

export const DiaryCategory = () => <Category label="Dairy" src={dairy} />;
