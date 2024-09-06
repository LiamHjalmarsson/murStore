import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import headerOne from "../../assets/headerOne.jpg";
import List from '../../components/list/List';

const Products = () => {
    const { id } = useParams();
    const [maxPrice, setMaxPrice] = useState(3000);

    const onPriceHandler = (e) => {
        setMaxPrice(e.target.value);
    }

    return (
        <div className='products px-10 py-8 flex '>
            <div className='left flex-1 sticky h-full top-12'>
                <div className='filterItem mb-8 '>
                    <h2>Categories</h2>
                    <div className='inputItem  mb-2'>
                        <label htmlFor="shoes">Shoes</label>
                        <input type="checkbox" id="1" value={1} />
                    </div>
                    <div className='inputItem mb-2'>
                        <label htmlFor="shoes">Coats</label>
                        <input type="checkbox" id="1" value={1} />
                    </div>
                </div>
                <div className='filterItem mb-8 '>
                    <h2>Filter by price</h2>
                    <div className='inputItem mb-2'>
                        <span>0</span>
                        <input type="range" min={0} max={maxPrice} onChange={onPriceHandler} />
                        <span>3000</span>
                    </div>
                </div>
                <div className='filterItem mb-8 '>
                    <h2>Sort by</h2>
                    <div className='inputItem mb-2'>
                        <label htmlFor="asc">Price (Lowest)</label>
                        <input type='radio' id='asc' value="asc" name='price' />
                    </div>
                    <div className='inputItem mb-2'>
                        <label htmlFor="desc">Price (Highest)</label>
                        <input type='radio' id='desc' value="desc" name='price' />
                    </div>
                </div>
            </div>

            <div className='right flex-[3]'>
                <img src={headerOne} alt="" className='w-full h-80 object-cover mb-10' />
                <List />
            </div>
        </div>
    );
}

export default Products;
