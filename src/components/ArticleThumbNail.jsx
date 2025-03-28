import React from "react";
import { Link } from "react-router-dom";

function ArticleThumbNail({ id, title, author, img, likes }) {
  return (
    <Link to={`/article/${id}`}>
      <div className="px-4 py-4 border-red border-2 bg-beige hover:drop-shadow-2xl transition-all duration-300 mx-1 mb-8">
        <img src={img} alt="" className="h-full mx-auto w-72 object-cover" />
        <h2 className="text-center capitalize text-2xl font-semibold tracking-wide mt-4 underline mb-2">
          {title}
        </h2>
        <div className="flex flex-col items-center gap-0 justify-center">
          <h3 className="text-slate-600 text-xl text-center">{author}</h3>
          <h3 className="text-slate-600 text-md text-center">Likes: {likes}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ArticleThumbNail;
