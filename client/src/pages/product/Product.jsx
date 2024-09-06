import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const Product = () => {
    let { id } = useParams();

    const { data, loading, error } = useFetch(`products?populate=*&[filters][slug][$eq]=${id}`);

    return (
        <div className='product py-24 px-10 flex gap-10'>
            {loading && <Loading />}
            {data[0] && (
                <>
                    <div className='left flex-1'>
                        <div className='images'>

                        </div>
                        <div className='mainImg'>
                            <img src={import.meta.env.VITE_APP_API_UPLOAD_URL + data[0]?.attributes?.image?.data?.[0]?.attributes?.url} alt="" />
                        </div>
                    </div>

                    <div className='right flex-1 flex flex-col gap-10 p-4'>
                        <h1 className='uppercase font-semibold text-3xl'>
                            {data[0].attributes.title}
                        </h1>
                        <span className='font-semibold text-lg text-blue-500'>
                            {data[0].attributes.price} KR
                        </span>

                        <p className='text-gray-500 leading-relaxed'>
                            description
                        </p>

                        <div className='quantity flex gap-10 items-center w-fit'>
                            <button className='py-2 px-4 bg-gray-200 text-lg'>
                                -
                            </button>
                            <span>
                                1
                            </span>
                            <button className='py-2 px-4 bg-gray-200 text-lg'>
                                +
                            </button>
                        </div>

                        <div>
                            <button className='px-8 py-2 text-white bg-blue-600 font-semibold'>
                                Add to Cart
                            </button>
                        </div>

                        <div>
                            <button className='text-blue-600 font-semibold'>
                                Add to wish list
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Product;
