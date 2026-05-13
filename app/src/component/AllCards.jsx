import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllCards = ({p}) => {
    return (
        <div>
            <div className="rounded-3xl h-full overflow-hidden shadow-lg border border-red-600 shadow-orange-500 hover:scale-95 duration-500">
      
      <div className="relative h-64 w-full">
        <Image
          src={p.imageUrl}
          alt={p.destinationName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <p className=" bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent w-fit font-bold text-lg">
            ${p.price}
          </p>
        </div>

        <p className="text-gray-400">
          {p.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <p className='bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>📍 {p.country}</p>
          <p>⏳ <span className='bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>{p.duration}</span></p>
        </div>

        <div className="flex items-center justify-between pt-3">
          <p className="text-sm text-gray-300">
            Departure: {p.departureDate}
          </p>

          <Link href={`/destination/${p._id}`} className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90">
            Explore
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AllCards;