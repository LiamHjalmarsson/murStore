import React from 'react';

const Categories = () => {
    return (
        <div className='flex h-[70vh] gap-4 px-6 overflow-hidden'>
            <div className='flex flex-col gap-4 flex-1'>
                <div className='flex-1 h-1/2'>
                    {/* <img src={headerOne} className="object-cover object-center w-full h-full" alt="Category 1" /> */}
                </div>
                <div className='flex-1 h-1/2'>
                    {/* <img src={headerOne} className=" object-cover object-center w-full h-full" alt="Category 2" /> */}
                </div>
            </div>

            <div className='flex-1'>
                {/* <img src={headerOne} className="w-full h-full object-cover" alt="Category 3" /> */}
            </div>

            <div className='flex flex-col gap-4 flex-1'>
                <div className='flex gap-4 flex-1'>
                    <div className='flex-1'>
                        {/* <img src={headerOne} className="w-full h-full object-cover" alt="Category 4" /> */}
                    </div>
                    <div className='flex-1'>
                        {/* <img src={headerOne} className="w-full h-full object-cover" alt="Category 5" /> */}
                    </div>
                </div>
                <div className='flex-1'>
                    {/* <img src={headerOne} className="w-full h-full object-cover" alt="Category 6" /> */}
                </div>
            </div>
        </div>
    );
}

export default Categories;
