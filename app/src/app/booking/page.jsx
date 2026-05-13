import Booking from '@/component/Booking';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='space-y-2'>
                <h2 className='text-2xl font-bold'>All Booking</h2>
                <h2 className='text-gray-400'>Hello All bookings Everyone</h2>
            </div>
            <Booking></Booking>
        </div>
    );
};

export default page;