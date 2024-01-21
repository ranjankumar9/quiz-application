import React, { useState } from "react";
import { questions3 } from "../Questions/Quiz-1";
import quizstyle from "../Styles/Quiz1.module.scss";
import LeaderBoard from "../Leaderboard/LeaderBoard";

const Quiz3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score3, setScore3] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore3(score3 + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions3.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className={quizstyle.quiz_main_container}>
      <div className={quizstyle.quiz_container}>
        {showScore ? (
          <div className={quizstyle.score_section}>
            <LeaderBoard score3={score3} question3={questions3.length} />
          </div>
        ) : (
          <>
            <div className={quizstyle.question_section}>
              <div className={quizstyle.question_count}>
                <span>Question {currentQuestion + 1}</span>/{questions3.length}
              </div>
              <div className={quizstyle.question_text}>
                {questions3[currentQuestion].questionText}
              </div>
            </div>
            <div className={quizstyle.answer_section}>
              {questions3[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className={quizstyle.quiz_button}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz3;
