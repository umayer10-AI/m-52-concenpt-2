// "use client";
import { getId } from "@/lib/data";
import Image from "next/image";

const DetailsPage = async ({params}) => {

    const {id} = await params
    const p = await getId(id)

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto bg-slate-800 shadow shadow-pink-500 rounded-3xl overflow-hidden">

        {/* Banner Image */}
        <div className="relative w-full h-70">
          <Image
            src={p.imageUrl}
            alt={p.destinationName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="p-8 text-white space-y-3">
              <p className="bg-pink-500 inline-block px-4 py-1 rounded-full text-sm font-semibold">
                {p.category}
              </p>

              <h1 className="text-5xl font-bold">
                {p.destinationName}
              </h1>

              <div className="flex gap-6 text-lg">
                <p>📍 {p.country}</p>
                <p>⏳ {p.duration}</p>
                <p>💲 {p.price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 grid md:grid-cols-3 gap-8">

          {/* Left */}
          <div className="md:col-span-2 space-y-6">

            <div>
              <h2 className="text-3xl font-bold mb-3">
                About This Tour
              </h2>

              <p className="text-gray-400 font-semibold leading-8">
                {p.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-linear-to-r from-orange-400 to-red-500 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Departure Date
                </h3>

                <p className="text-gray-600 font-semibold">
                  {p.departureDate}
                </p>
              </div>

              <div className="bg-linear-to-r from-orange-400 to-red-500 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Tour Duration
                </h3>

                <p className="text-gray-600 font-semibold">
                  {p.duration}
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-3xl p-6 sticky top-10">

              <h2 className="text-3xl font-bold mb-2">
                ${p.price}
              </h2>

              <p className="text-white/80 mb-6">
                Book this amazing experience now.
              </p>

              <div className="space-y-4">

                <button className="w-full py-3 rounded-2xl bg-white text-purple-600 font-bold hover:scale-105 duration-300">
                  Booking Now
                </button>

                <button className="w-full py-3 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 duration-300">
                  Edit Tour
                </button>

                <button className="w-full py-3 rounded-2xl bg-red-500 text-white font-bold hover:scale-105 duration-300">
                  Cancel Booking
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;