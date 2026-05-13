"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      
      <div className="text-center max-w-2xl">
        
        <h1 className="text-[140px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-none">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-5 text-lg leading-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          
          <Link href="/">
            <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 duration-300 shadow-lg">
              Back Home
            </button>
          </Link>

          <button
            onClick={() => history.back()}
            className="px-7 py-3 rounded-2xl border border-gray-600 text-white hover:bg-white hover:text-black duration-300"
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default NotFound;