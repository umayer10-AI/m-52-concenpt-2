import { getData } from '@/lib/data';
import React from 'react';

const Cards = async () => {

    const data = await getData()
    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default Cards;