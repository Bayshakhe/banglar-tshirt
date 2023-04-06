import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            {tshirts.length}
        </div>
    );
};

export default Home;