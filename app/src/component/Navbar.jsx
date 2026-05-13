import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

const Navbar = () => {
    return (
        <div>
            <Nav1></Nav1>
            <h2 className='text-2xl font-bold bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent w-fit'>Umayer Site</h2>
            <Nav2></Nav2>
        </div>
    );
};

export default Navbar;