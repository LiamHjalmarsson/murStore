import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

const Featured = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_APP_API_URL + "products?populate=*");
                const recourse = await response.json();

                setProducts(recourse.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <section className='mx-auto px-10 my-24 max-w-5xl'>
            <h2 className='text-3xl font-semibold text-slate-800 mb-12'>
                Featured
            </h2>

            <div className='flex justify-center gap-12 items-center mx-auto max-w-4xl'>
                {products?.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default Featured;
