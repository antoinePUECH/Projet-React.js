import React, { useState } from 'react';
import data from '../../data/Quizz1.json'
import '../../sass/components/_quizz.scss'
import { useHistory } from 'react-router-dom';

function Quizz1() {
    let [question, setQuestion] = useState(0)
    const [score, setScore] = useState(0)

    let router = useHistory()

    const Quizz = data.Quizz1
    const GoToScore = (score) => {
      question = 0
      router.push({
          pathname: '/scoreShow',
          state: { 
            detail: score,
            type: "de la bière",
            quizzId: 1
          }
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
    const random = Quizz[question].answers.sort(() => Math.random() - Math.random()).find(() => true)
    return(
        <div className="quizz">
          <h1 className="quizzTitle">Quizz sur la bière !</h1>
          <h1 className="numberQuestion"> Question n° {question + 1} <span>/ {data.Quizz1.length} </span></h1> 
          <div className="contentQuestion">
            <p id="questionTitle">{Quizz[question].questionTitle} ?</p>
          <div className="contentAnswer">
            {random && Quizz[question].answers.map((option) => (
              <button className="answerBtn" onClick={() => isValid(option.isValid)}> {option.answerTitle} </button>
            ))}
          </div>
          </div>
        </div>
    )
}

export default Quizz1
