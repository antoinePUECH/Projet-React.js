import React, { useState } from 'react';
import data from '../data/Quizz1.json'

function Quizz1() {

    const [question, setQuestion] = useState(0)
    return(
        <div className="quizz">
          <p>Titre: {data.Quizz1[question].titreQuestion}</p>
          <button onClick={() => setQuestion(question + 1)}>
            next question
          </button>
        </div>
    )
}

export default Quizz1
