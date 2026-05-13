"use client"
import { deleteData } from '@/lib/action';
import React from 'react';

const CancelData = ({p}) => {
    return (
        <button onClick={() => deleteData(p)} className="w-full py-3 rounded-2xl bg-red-500 text-white font-bold hover:scale-105 duration-300">
            Cancel Booking
        </button>
    );
};

export default CancelData;