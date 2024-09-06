import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ product }) => {
    const { id, attributes } = product;

    return (
        <Link className='' to={`product/${attributes.slug}`}>
            <div className='flex flex-col gap-2 capitalize'>
                <div className='w-48 h-64 relative'>
                    {attributes.isNew && (
                        <div className=' absolute top-1 left-1 p-1 text-green-500 z-10 bg-white'>
                            New season
                        </div>
                    )}
                    <img src={import.meta.env.VITE_APP_API_UPLOAD_URL + attributes.image?.data?.[0]?.attributes?.url } alt="" className='object-cover object-center w-full h-full' />
                </div>

                <div className='px-2'>
                    <h2>
                        {attributes.title}
                    </h2>
                    <div className='text-sm'>
                        <span>
                            {attributes.price}
                        </span>
                    </div>
                </div>

            </div>
        </Link>
    );
}

export default Card;
