import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import headerOne from "../../assets/headerOne.jpg";
import { useFetch } from '../../hooks/useFetch';
import List from '../../components/list/List';

const Products = () => {
    const { id } = useParams();
    const [maxPrice, setMaxPrice] = useState(3000);
    const [sort, setSort] = useState("");
    const [selectedSubCategories, setSelectedSubCategories] = useState([])

    const { data, loading, error } = useFetch(`sub-categories?[filters][categories][title][$eq]=${id}`);

    const onPriceHandler = (e) => {
        setMaxPrice(e.target.value);
    }

    const sortHandler = (e) => {
        setSort(e.target.value);
    }

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter(item => item !== value));
    }

    return (
        <div className='products px-10 py-16 flex '>
            <div className='left flex-1 sticky h-full top-12'>
                <div className='filterItem mb-8 '>
                    <h2>Categories</h2>
                    {data?.map(category => (
                        <div className='inputItem  mb-2' key={category.id}>
                            <label htmlFor={category.id}>{category.attributes.title}</label>
                            <input 
                                type="checkbox" 
                                id={category.id} 
                                value={category.id} 
                                onChange={handleCategoryChange} 
                            />
                        </div>
                    ))}
                </div>
                <div className='filterItem mb-8 '>
                    <h2>Filter by price</h2>
                    <div className='inputItem mb-2'>
                        <span>0</span>
                        <input type="range" min={0} max={maxPrice} onChange={onPriceHandler} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem mb-8 '>
                    <h2>Sort by</h2>
                    <div className='inputItem mb-2'>
                        <label htmlFor="asc">Price (Lowest)</label>
                        <input type='radio' id='asc' value="asc" name='price' onChange={sortHandler} />
                    </div>
                    <div className='inputItem mb-2'>
                        <label htmlFor="desc">Price (Highest)</label>
                        <input type='radio' id='desc' value="desc" name='price' onChange={sortHandler} />
                    </div>
                </div>
            </div>

            <div className='right flex-[3]'>
                <img src={headerOne} alt="" className='w-full h-80 object-cover mb-10' />
                <List
                    id={id}
                    price={maxPrice}
                    sort={sort}
                    subCategories={selectedSubCategories}
                />
            </div>
        </div>
    );
}

export default Products;
