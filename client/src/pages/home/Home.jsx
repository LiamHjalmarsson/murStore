import React from 'react';
import Slider from '../../components/slider/Slider';
import Featured from '../../components/featured/Featured';
import Categories from '../../components/categories/Categories';

const Home = () => {
    return (
        <>
            <Slider />

            <Featured
                type="Trending"
            />

            {/* <Categories /> */}
        </>
    );
}

export default Home;
