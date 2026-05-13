import { getData } from '@/lib/data';
import React from 'react';
import AllCards from './AllCards';

const Cards = async () => {

    const data = await getData()
    console.log(data)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                data.map(v => <AllCards key={v._id} p={v}></AllCards>)
            }
        </div>
    );
};

export default Cards;