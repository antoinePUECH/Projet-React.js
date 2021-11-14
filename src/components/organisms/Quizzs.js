import QuizzBlock from './../atoms/QuizzBlock';
import Title from './../atoms/Title';
import '../../sass/components/_homequizz.scss';
import beer from '../../assets/img/beer.jpeg';
import whisky from '../../assets/img/whisky.jpeg';
import vodka from '../../assets/img/vodka.jpeg';
import vin from '../../assets/img/vin.jpeg';

function Quizz1() {

    return(
        <div className="homeQuizz">
            <Title txt="Choisissez votre quizz !"/>
            <div className="allQuizz">
                <QuizzBlock img={beer} to="/quizz1" titleQuizz="Bière"></QuizzBlock>
                <QuizzBlock img={whisky} to="/quizz2" titleQuizz="Whisky"></QuizzBlock>
                <QuizzBlock img={vodka} to="/quizz3" titleQuizz="Vodka"></QuizzBlock>
                <QuizzBlock img={vin} to="/quizz4" titleQuizz="Vin"></QuizzBlock>
            </div>
        </div>
    )
}

export default Quizz1
