import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart)
    return (
        <div className='mx-10'>
            <h4 className='font-bold text-xl text-center'>Order Summary {cart.length}</h4>
            {
                cart.map(a => <div className='flex justify-between items-center w-full'>
                    <p>{a.name}</p>
                    <button onClick={()=> handleRemoveFromCart(a._id)} className='btn'>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;