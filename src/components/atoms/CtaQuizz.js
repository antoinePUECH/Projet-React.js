import { Link, Router } from "react-router-dom";
import "../../sass/components/_ctaquizz.scss";

const CtaQuizz = (props) => {
  return (
    <Router>
      <Link to={props.to}>
        <button className="ctaQuizz">{props.txt}</button>
      </Link>
    </Router>
  );
};

export default CtaQuizz;
