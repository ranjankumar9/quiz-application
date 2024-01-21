import React, { useState } from 'react'
import { questions2 } from "../Questions/Quiz-1";
import quizstyle from "../Styles/Quiz1.module.scss";
import LeaderBoard from '../Leaderboard/LeaderBoard';

const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score2, setScore2] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore2(score2 + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions2.length) {
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
              <LeaderBoard  score2={score2} question2={questions2.length} />
            </div>
      ) : (
        <>
          <div className={quizstyle.question_section}>
            <div className={quizstyle.question_count}>
              <span>Question {currentQuestion + 1}</span>/{questions2.length}
            </div>
            <div className={quizstyle.question_text}>
              {questions2[currentQuestion].questionText}
            </div>
          </div>
          <div className={quizstyle.answer_section}>
            {questions2[currentQuestion].answerOptions.map((answerOption) => (
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
  )
}

export default Quiz2