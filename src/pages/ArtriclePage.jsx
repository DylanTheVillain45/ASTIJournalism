import { useState } from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../data/ArticleData.js";

const ArticlePage = () => {
  const id = useParams();
  const article = articleData[parseInt(id.id)];
  const [likes, setLikes] = useState(Math.floor((Math.random() * 5 + 2) * 100));

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <div className="relative pt-16 pb-24 min-h-[75vh] bg-pink-50 px-5">
        <img src={article.image} alt="" className="w-60 sm:w-80 md:w-120 lg:w-150 mx-auto mb-8" />
        <div className="relative z-20 max-w-[400px] md:max-w-[540px] mx-auto font-serif">
          <h1 className="font-bold text-3xl text-center capitalize tracking-wider">
            {article.title}
          </h1>
          <p className="mt-4 text-center text-slate-700">{article.author}</p>
          <div className="flex items-center justify-center gap-8 mt-4 text-2xl capitalize">
            <div className="border-2 px-4 py-2 rounded-full border-slate-600">
              likes: {likes}
            </div>
            <div
              className="border-2 px-4 py-2 rounded-full border-slate-600 hover:bg-slate-600 hover:text-pink-50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={handleLike}
            >
              like 👍
            </div>
          </div>
        </div>
        <hr className="border-[1.5px] border-black w-[80vw] mx-auto my-8" />
        <div className="relative z-20 rounded-md whitespace-pre-wrap indent-8 max-w-[500px] sm:max-w-[600px] md:max-w-[800px] mx-auto text-justify leading-10 text-lg font-serif">
          <div dangerouslySetInnerHTML={{ __html: article.article }} />
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
