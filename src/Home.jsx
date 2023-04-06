import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from './Cart';

const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts)
    return (
        <div className='grid grid-cols-4 gap-4 my-10'>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div>
                {
                    <Cart></Cart>
                }
            </div>
        </div>
    );
};

export default Home;