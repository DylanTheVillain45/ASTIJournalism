import React from "react";
import QuizThumbNail from "./QuizThumbNail.jsx";
import { QuizData } from "../data/QuizData.js";

const ShowQuizzes = () => {

  return (
    <div className="my-12 columns-1 md:columns-2 xl:columns-3 px-10 mx-auto max-w-[450px] md:max-w-[900px] xl:max-w-[1200px] ">
      {QuizData.map((quiz, index) => (
        <div key={index} className="break-inside-avoid mb-4 min-h-[200px]">
          <QuizThumbNail
            id={index}
            title={quiz.title}
            author={quiz.author}
            img={quiz.image}
            bio={quiz.bio}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowQuizzes;
