import React from "react";
import ShowArticles from "../components/ShowArticles.jsx";
import FlipBookTab from "../components/FlipBookTab.jsx";
import ShowQuizzes from "../components/ShowQuizzes.jsx";

function Home() {
  return (
    <div className="-z-50 px-5 bg-pink-50 w-full py-24 min-h-[70vh]">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="hidden sm:block">
            <FlipBookTab />
          </div>
          <h1 className="text-center text-4xl font-serif">
            Today's Best Quizzes
          </h1>
          <ShowQuizzes />
          <h1 className="text-center text-4xl font-serif">
            Today's Top Stories
          </h1>
        </div>
        <ShowArticles />
      </div>
    </div>
  );
}

export default Home;
