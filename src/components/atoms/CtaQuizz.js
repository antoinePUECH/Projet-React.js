import {Link} from 'react-router-dom';
import '../../sass/components/_ctaquizz.scss';

const CtaQuizz = (props) => {
    return(
        <Link to={props.to}>
            <button className="ctaQuizz">
                {props.txt}
            </button>
        </Link>
    )
}

export default CtaQuizz
