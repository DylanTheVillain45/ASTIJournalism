import React from "react";
import ShowArticles from "../components/ShowArticles.jsx";
import { useLocation } from "react-router-dom";

function SpecificArticles() {
  const place = useLocation();
  const address = place.pathname.replace(/^\/+/, "").replace(/%20/g, " ");

  return (
    <div className="px-5 -z-50 bg-pink-50 w-full py-24 min-h-[70vh]">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <h1 className="text-center text-4xl font-serif capitalize">
            {address}
          </h1>
        </div>
        <ShowArticles />
      </div>
    </div>
  );
}

export default SpecificArticles;
