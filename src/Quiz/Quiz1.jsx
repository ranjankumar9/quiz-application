import React, { useState } from "react";
import { questions } from "../Questions/Quiz-1";
import quizstyle from "../Styles/Quiz1.module.scss";
import { useNavigate } from "react-router-dom";
import LeaderBoard from "../Leaderboard/LeaderBoard";

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate()

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
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
            <LeaderBoard  score={score} question={questions.length} />
          </div>
        ) : (
          <>
            <div className={quizstyle.question_section}>
              <div className={quizstyle.question_count}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className={quizstyle.question_text}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className={quizstyle.answer_section}>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
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

export default Quiz1;
