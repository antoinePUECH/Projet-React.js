import { useLocation } from 'react-router-dom';

const ScoreShow = () => {
    const location = useLocation();
    const score = location.state.detail
    const type = location.state.type
    const truc = () => {
        if (score <= 4) {
            return(
                <h1>Aïe... vous pouvez faire mieux !</h1>
            )
        } else if(score > 4 && score <= 7) {
            return(
                <h1>Pas mal ! Vous avez de bonnes connaissance dans le domaine {type} !</h1>
            )
        } else if(score > 7){
            return(
                <h1>Bravo ! Vous êtes un véritable expert {type} !</h1>
            )
        }
    }
    return(
        <div className="scoreShow">
            <h1>Votre score est de {score}</h1>
            {truc()}
        </div>
    )
}

export default ScoreShow
