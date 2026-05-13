import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

const Navbar = () => {
    return (
        <div className='border-b border-b-orange-700 text-sm'>
            <div className='w-[90%] mx-auto flex items-center justify-between py-3'>
                <Nav1></Nav1>
                <h2 className='text-2xl font-bold bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent w-fit'>Umayer Site</h2>
                <Nav2></Nav2>
            </div>
        </div>
    );
};

export default Navbar;