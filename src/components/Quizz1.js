import React, { useState } from 'react';
import data from '../data/Quizz1.json'
import { useHistory } from 'react-router-dom';

function Quizz1() {
    const [question, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const Quizz = data.Quizz1[question]
    const isValid = (valide) => {
      if (valide) {
        setScore(score + 1)
        setQuestion(question + 1)
      } else {
        setQuestion(question + 1)
      }
    }
    let history = useHistory();

    const paramsRoute = (score) => {
       history.push({
           pathname: '/scoreShow',
           state: { detail: score }
       });
    };
    return(
        <div className="quizz">
              <h1> Question n° {question + 1} <span>/ {data.Quizz1.length} </span></h1> 
          <p>Titre: {Quizz.titreQuestion}</p>
          <div>
            {Quizz.propositions.map((option) => (
              <button onClick={() => isValid(option.valide)}> {option.reponseTitre} </button>
            ))}
          </div>
          <button onClick= {() => paramsRoute(score)}>test</button>
        </div>
    )
}

export default Quizz1
