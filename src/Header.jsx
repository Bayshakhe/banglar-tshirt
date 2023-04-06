import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-violet-300 font-bold p-2 text-center'>
            <Link className='mr-8' to='/'>Home</Link>
            <Link className='mr-8' to='/order'>Order</Link>
            <Link className='mr-8' to='/about'>About</Link>
            <Link className='mr-8' to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;