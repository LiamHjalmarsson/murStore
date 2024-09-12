import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import image from "../../assets/image.jpg";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlideHandler = () => {
        setCurrentSlide(prev => prev - 1)
    }

    const nextSlideHandler = () => {
        setCurrentSlide(prev => prev + 1)
    }

    return (
        <div className='relative h-screen overflow-hidden'>
            <div className={`flex h-full duration-500 transition-transform`} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={image} alt="" className='w-screen min-w-[100vw] object-cover object-center' />
                <img src={image} alt="" className='w-screen min-w-[100vw] object-cover object-center' />
            </div>

            <div className=' absolute w-full justify-center items-center z-10 bottom-20 flex gap-12 mx-auto'>
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
