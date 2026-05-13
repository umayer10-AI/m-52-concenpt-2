import Image from 'next/image';
import React from 'react';

const AllCards = ({p}) => {
    return (
        <div>
            <div className="max-w-sm rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:scale-105 duration-300">
      
      <div className="relative h-64 w-full">
        <Image
          src={p.imageUrl}
          alt={p.destinationName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {p.category}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {p.destinationName}
          </h2>

          <p className="text-orange-500 font-bold text-lg">
            ${p.price}
          </p>
        </div>

        <p className="text-gray-500">
          {p.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>📍 {p.country}</p>
          <p>⏳ {p.duration}</p>
        </div>

        <div className="flex items-center justify-between pt-3">
          <p className="text-sm text-gray-500">
            Departure: {p.departureDate}
          </p>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90">
            Explore
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AllCards;