"use client"
import React from 'react';

const BookingBtn = ({p,id}) => {

    const a = () => {

    }

    return (
        <button onClick={a} className="w-full py-3 rounded-2xl bg-white text-purple-600 font-bold hover:scale-105 duration-300">
            Booking Now
        </button>
    );
};

export default BookingBtn;