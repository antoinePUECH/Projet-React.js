import QuizzBlock from './QuizzBlock';
import Title from './Title';
import '../sass/components/_homequizz.scss';
import beer from '../assets/img/beer.jpeg';
import whisky from '../assets/img/whisky.jpeg';
import vodka from '../assets/img/vodka.jpeg';
import vin from '../assets/img/vin.jpeg';

function Quizz1() {

    return(
        <div className="homeQuizz">
            <Title txt="Choisissez votre quizz !"/>
            <div className="allQuizz">
                <QuizzBlock img={beer} href="/quizz1" titleQuizz="Bière"></QuizzBlock>
                <QuizzBlock img={whisky} href="/quizz2" titleQuizz="Whisky"></QuizzBlock>
                <QuizzBlock img={vodka} href="/quizz3" titleQuizz="Vodka"></QuizzBlock>
                <QuizzBlock img={vin} href="/quizz4" titleQuizz="Vin"></QuizzBlock>
            </div>
        </div>
    )
}

export default Quizz1
