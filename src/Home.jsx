import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from './Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            toast.error('You had already added this Tshirt..');
            return;
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='flex flex-col-reverse md:grid grid-cols-4 gap-4 my-10'>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div>
                {
                    <Cart key={cart._id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                }
            </div>
        </div>
    );
};

export default Home;