import React from "react";
import { team } from "../data/About"

const AboutPage = () => {
  return (
    <div className="px-5 min-h-screen text-center px-8 py-20 mx-auto bg-pink-50">
      <h1 className="text-4xl underline font-serif mb-12">Meet Our Team</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {team.map((article, index) => (
          <div
            key={index}
            className="p-8  bg-beige border-2 rounded-xl border-black "
          >
            <h1 className="text-2xl font-serif underline mb-8">
              {article.name}
            </h1>
            <p className="text-xl opacity-60">{article.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
