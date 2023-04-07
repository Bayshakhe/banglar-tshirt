// import React, { useContext } from 'react';
import { useContext } from 'react';
import Myself from './Myself';
import { MoneyContext } from './Grandpa';
// import { RingContext } from './Grandpa';

const Father = () => {
    // const ring = useContext(RingContext)
    const [money, setMoney] = useContext(MoneyContext)

    return (
        <div className='text-center m-12 p-5 border-4 border-blue-600'>
            <h1 className='font-bold text-xl'>Father</h1>
            <p>{money}</p>
            <button className='bg-blue-600 text-white p-1' onClick={()=> setMoney(money + 1000)}>Send Money</button>
            {/* <p>{ring}</p> */}
            <Myself></Myself>
        </div>
    );
};

export default Father;