import React from 'react'
import { Link } from 'react-router-dom'

const FlipBookTab = () => {
  return (
    <Link to="/flipbook">
      <div className=" bg-red text-white flex items-center justify-center font-serif flex-col mb-18 rounded-4xl mx-8 py-4 px-4">
        <img
          src="/assets/marchEdition/tabImage.jpg"
          className="w-full h-full object-cover object-[30%_20%] rounded-4xl mb-4"
          alt=""
        />
        <div className="text-2xl mb-2 ">SEE THE WINTER EDITION</div>
        <div className="font-serif hover:text-gray-500 transition-all duration-200 capitalize underline text-5xl">
          HERE
        </div>
      </div>
    </Link>
  );
}

export default FlipBookTab