import React, { useState } from 'react';
import data from '../data/Quizz2.json'
import '../sass/components/_quizz1.scss'
import { useHistory } from 'react-router-dom';

function Quizz2() {
    let [question, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    let router = useHistory();
    const Quizz = data.Quizz2
    const GoToScore = (score) => {
      question = 0
      router.push({
          pathname: '/scoreShow',
          state: { detail: score }
      });
   };
    if (Quizz.length < question + 1) {
      GoToScore(score)
    } else {}
    const isValid = (isValid) => {
      if (isValid) {
        setScore(score + 1)
        setQuestion(question + 1)
      } else {
        setQuestion(question + 1)
      }
    }
    return(
        <div className="quizz">
          <h1 className="quizzTitle">Quizz sur le whisky !</h1>
          <h1 className="numberQuestion"> Question n° {question + 1} <span>/ {data.Quizz2.length} </span></h1> 
          <div className="contentQuestion">
            <p id="questionTitle">{Quizz[question].questionTitle} ?</p>
          <div className="contentAnswer">
            {Quizz[question].answers.map((option) => (
              <button className="answerBtn" onClick={() => isValid(option.isValid)}> {option.answerTitle} </button>
            ))}
          </div>
          </div>
        </div>
    )
}

export default Quizz2
