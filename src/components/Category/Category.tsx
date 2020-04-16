import React, { useState, useEffect } from 'react';
import { ICategory } from 'store/store';
import { Icon } from 'components/Icons/CategoryIcons';
import { upperCaseFirstLetter } from 'components/StoreListItem/StoreListItem';

interface CategoryProps {
    category: ICategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    const [categoryState, setCategoryState] = useState<any>('');
    useEffect(() => {
        Icon(category.name).then((file) => {
            console.log(file);
            setCategoryState(file);
        });
    }, [category.name]);

    return (
        <div style={{ marginLeft: '15px', marginRight: '15px' }}>
            <div style={{ width: '80px' }}>
                <img
                    style={{ display: 'block', margin: 'auto', width: '64px' }}
                    src={categoryState.default}
                    alt={category.name}
                />
            </div>
            <div>
                <p style={{ textAlign: 'center' }}>{upperCaseFirstLetter(category.name)}</p>
            </div>
        </div>
    );
};
