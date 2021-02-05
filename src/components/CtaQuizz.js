import {Link} from 'react-router-dom';
import '../sass/components/_ctaquizz.scss';

const CtaQuizz = () => {
    return(
        <button className="ctaQuizz">
            <Link to="/quizzs">Voir nos quizz</Link>
        </button>
    )
}

export default CtaQuizz