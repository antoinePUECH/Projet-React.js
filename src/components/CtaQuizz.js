import {Link} from 'react-router-dom';
import '../sass/components/_ctaquizz.scss';

const CtaQuizz = (props) => {
    return(
        <button className="ctaQuizz">
            <Link to={props.href}>{props.txt}</Link>
        </button>
    )
}

export default CtaQuizz