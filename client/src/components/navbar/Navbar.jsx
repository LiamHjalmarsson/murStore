import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-gray-800 fixed w-full z-20">
            <nav className='flex justify-between items-center gap-6 py-4 px-8 text-white'>
                <ul className='flex gap-x-4'>
                    <li>
                        <NavLink to="/products/men">
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/women">
                            Women
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/products/children">
                            Children
                        </NavLink>
                    </li>
                </ul>

                MurStore

                <ul className='flex gap-x-4'>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
