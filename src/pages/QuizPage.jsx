import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizData } from "../data/QuizData.js";

const QuizPage = () => {
  const id = useParams();
  const quiz = QuizData[parseInt(id.id)];

  const [showResults, setShowResults] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(quiz.questions.length).fill(null)
  )

  useEffect(() => {
    setShowResults(!selectedAnswers.some((item) => item === null));
  }, [selectedAnswers]);

  const handleSelect = (questionIndex, answerIndex) => {
    const newSelection = [...selectedAnswers]
    if (newSelection[questionIndex] == answerIndex) newSelection[questionIndex] = null
    else newSelection[questionIndex] = answerIndex
    setSelectedAnswers(newSelection)
  }

  const GetResult = () => {
    const answerArray = new Array(4).fill(0)
    selectedAnswers.forEach((answer) => {
      if (answer >= 0 && answer < 4) {
        answerArray[answer]++;
      }
    });

    let highestIndex = -1
    let highestVal = -9999
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] > highestVal) {
        highestVal = answerArray[i]
        highestIndex = i
      } else if (answerArray[i] == highestVal) {
        highestIndex= Math.random() * 10 > 5 ? i : highestIndex;
      }
    }

    console.log(highestIndex)
    return highestIndex
  }

  return (
    <>
      <div className=" relative pt-16 pb-24 min-h-[75vh] bg-pink-50 px-5">
        <img src={quiz.image} alt="" className="w-96 mx-auto mb-8" />
        <div className="relative z-20 max-w-[400px] md:max-w-[540px] mx-auto font-serif">
          <h1 className="font-bold text-3xl text-center capitalize tracking-wider">
            {quiz.title}
          </h1>
          <p className="mt-4 text-center text-slate-700 text-2xl">
            {quiz.author}
          </p>
        </div>
        <hr className="border-[1.5px] border-black w-[80vw] mx-auto my-8" />
        <div className="relative z-20 rounded-md whitespace-pre-wrap indent-8 max-w-[500px] sm:max-w-[600px] md:max-w-[800px] mx-auto text-justify leading-10 text-lg font-serif">
          {quiz.questions.map((question, qindex) => (
            <div key={qindex}>
              <div className="text-center text-2xl font-bold mb-4">
                {question.question}
              </div>
              <div className="columns-2 gap-y-4">
                {question.answers.map((answer, aindex) => (
                  <div
                    key={aindex}
                    className={`flex justify-center items-center p-4 border-2 select-none text-center capitalize ${
                      selectedAnswers[qindex] == aindex
                        ? "bg-red border-black"
                        : "bg-beige border-red"
                    } hover:drop-shadow-2xl transition-all duration-300 mx-1 mb-8`}
                    onClick={() => handleSelect(qindex, aindex)}
                  >
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            showResults ? "block" : "hidden"
          } flex justify-center items-center py-8 text-center font-serif`}
        >
          <div>
            <p className="text-xl">You Got:</p>
            <h1 className="text-6xl mb-8 mt-4 underline">
              {quiz.answer[GetResult()]}
            </h1>
            <p className="text-xl my-2">
              {Math.round(Math.random() * Math.random() * 100 + 2)}% of Others
              Got the Same Answer!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
