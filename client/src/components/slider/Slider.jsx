import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import headerOne from "../../assets/headerOne.jpg"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlideHandler = () => {
        setCurrentSlide(prev => prev - 1 )
    }

    const nextSlideHandler = () => {
        setCurrentSlide(prev => prev + 1 )
    }

    return (
        <div className='relative h-screen overflow-hidden'>
            <div className='flex h-full -translate-x-36'>
                <img src={headerOne} alt="" className='w-screen object-cover object-center' />
                <img src={headerOne} alt="" className='w-screen object-cover object-center' />
            </div>

            <div className=' absolute z-10 bottom-20 left-1/2 right-1/2 flex gap-12 m-auto'>
                <span className='p-2 border border-white text-white' onClick={prevSlideHandler}>
                    <FaArrowLeft />
                </span>

                <span className='p-2 border border-white text-white' onClick={nextSlideHandler}>
                    <FaArrowRight />
                </span>
            </div>
        </div>
    );
}

export default Slider;
