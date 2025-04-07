import React from "react";
import { team } from "../data/About";

const AboutPage = () => {
  return (
    <div className="px-6 py-20 min-h-screen bg-pink-50 text-center mx-auto">
      <div className="md:max-w-[70vw] mx-auto">
        <h1 className="text-4xl font-serif font-semibold underline mb-12">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((article, index) => (
            <div
              key={index}
              className="bg-beige border-2 border-black rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                {article.name}
              </h2>
              <p className="text-xl text-gray-600 opacity-80">{article.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
