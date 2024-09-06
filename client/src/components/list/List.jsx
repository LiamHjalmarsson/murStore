import React from 'react';
import Card from '../card/Card';
import { useFetch } from '../../hooks/useFetch';

const List = ({ id, price, sort, subCategories }) => {
    const { data, loading, error } = useFetch(`products?populate=*&[filters][categories][title][$eq]=${id}${subCategories.map(
            item => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${price}
    `);

    return (
        <div className='list flex justify-between flex-wrap'>
            {
                data.map(subCategory => (
                    <Card
                        key={subCategory.id}
                        product={subCategory}
                    />
                ))
            }
        </div>
    );
}

export default List;
