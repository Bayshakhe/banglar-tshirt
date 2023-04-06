import React from 'react';

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price, gender, _id} = tshirt;
    return (
        <div className='border-2 text-center p-5 rounded-lg'>
            <img className='w-48 h-56 mx-auto' src={picture} alt="" />
            <p className='font-bold text-xl'>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={(()=> handleAddToCart(tshirt))} className='btn'>Shop Now</button>
        </div>
    );
};

export default Tshirt;