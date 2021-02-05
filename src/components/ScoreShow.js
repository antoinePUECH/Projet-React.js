import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'

const ScoreShow = () => {
    const location = useLocation();
    
    const score = location.state.detail
    return(
        <div>
            <h1>Votre score est de {score} </h1>
        </div>
    )
}

export default ScoreShow
