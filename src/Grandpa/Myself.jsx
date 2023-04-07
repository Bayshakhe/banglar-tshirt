import React, { useContext } from 'react';
import { MoneyContext, RingContext } from './Grandpa';

const Myself = () => {
    const angti = useContext(RingContext)
    const [money] = useContext(MoneyContext)
    return (
        <div className='text-center m-12 p-5 border-4 border-green-600'>
            <h1 className='font-bold'>Myself</h1>
            <p>{angti}</p>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Myself;