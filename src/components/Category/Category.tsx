import React, { useState, useEffect } from 'react';
import { ICategory } from 'store/store';
import { Icon } from 'components/Icons/CategoryIcons';
import { upperCaseFirstLetter } from 'components/Product/Product';

export const Category: React.FC<{ category?: ICategory }> = ({ category }: { category?: ICategory }) => {
    category = category ? category : ({ name: '' } as ICategory);

    const [categoryState, setCategoryState] = useState<any>('');
    useEffect(() => {
        Icon(category.name)
            .then((file) => {
                setCategoryState(file);
            })
            .catch((e) => {
                // console.log(e);
            });
    }, [category.name]);

    return (
        <div style={{ marginLeft: '15px', marginRight: '15px' }}>
            <div style={{ width: '80px' }}>
                <img style={{ display: 'block', margin: 'auto', width: '64px' }} src={categoryState.default} alt={category.name} />
            </div>
            <div>
                <p style={{ textAlign: 'center' }}>{upperCaseFirstLetter(category.name)}</p>
            </div>
        </div>
    );
};
