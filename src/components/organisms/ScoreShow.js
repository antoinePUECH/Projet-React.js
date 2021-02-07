import { useLocation } from 'react-router-dom';
import '../../sass/components/_scoreshow.scss'
import CtaQuizz from '../atoms/CtaQuizz';

const ScoreShow = () => {
    const location = useLocation();
    const score = location.state.detail
    const type = location.state.type
    const id = location.state.quizzId
    const quizzRoute = "Quizz" + id
    const truc = () => {
        if (score <= 4) {
            return(
                <h1 className="message">Aïe... vous pouvez faire mieux !</h1>
            )
        } else if(score > 4 && score <= 7) {
            return(
                <h1 className="message">Pas mal ! Vous avez de bonnes connaissance dans le domaine <span>{type}</span> !</h1>
            )
        } else if(score > 7){
            return(
                <h1 className="message">Bravo ! Vous êtes un véritable expert <span>{type}</span> !</h1>
            )
        }
    }
    return(
        <div className="scoreShow">
            <h1 className="score">Votre score est de <span>{score}</span> !</h1>
            {truc()}
            <CtaQuizz href={quizzRoute} txt="Réessayer !"></CtaQuizz>
        </div>
    )
}

export default ScoreShow
