import React from 'react'
import ArticleThumbNail from './ArticleThumbNail.jsx';
import { articleData } from "../data/ArticleData.js";
import { useLocation } from 'react-router-dom';
import { list } from 'postcss';

const ShowArticles = () => {
  const place = useLocation();
  const type = place.pathname.replace(/^\/+/, "").replace(/%20/g, " ");

  const filteredArticles = articleData.filter((article) => {
    if (type === "home" || type === "") {
      return true;
    }
    return article.type === type; 
  });

  const randomizeArticles = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }

    return list
  }


  return (
    <div className="my-12 columns-1 md:columns-2 xl:columns-3 px-10 mx-auto max-w-[450px] md:max-w-[900px] xl:max-w-[1200px] ">
      {randomizeArticles(filteredArticles).map((article, index) => (
        <div key={index} className="break-inside-avoid mb-4 min-h-[200px]">
          <ArticleThumbNail
            id={article.index}
            title={article.title}
            author={article.author}
            img={article.image}
            likes={Math.floor((Math.random() * 5 + 2) * 100)}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowArticles