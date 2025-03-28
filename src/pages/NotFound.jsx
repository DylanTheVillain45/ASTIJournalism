import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="bg-pink-50 h-[72vh] -mt-12 pt-24 -z-50">
      <div className="">
        <h2 className="mt-8 text-center text-3xl underline mb-8">
          Sorry Page Not Found!
        </h2>
      </div>
      <div className="flex justify-center">
        <Link to="/home">
          <button
            type="button"
            className="py-3 px-6  rounded-xl text-3xl font-extrabold text-white bg-red bg-opacity-60 hover:bg-opacity-75 transition-all duration-300"
          >
            Take Me Home!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
