import { Link, Router } from "react-router-dom";
import "../../sass/components/_quizzbloc.scss";

const QuizzBlock = (props) => {
  return (
    <div className="quizzBloc">
      <Router>
        <Link to={props.to}>
          <div className="fond">
            <img src={props.img} alt="imgQuizz" />
          </div>
          <div className="filter">
            <p>QUIZZ</p>
            <h2>{props.titleQuizz}</h2>
          </div>
        </Link>
      </Router>
    </div>
  );
};

export default QuizzBlock;
