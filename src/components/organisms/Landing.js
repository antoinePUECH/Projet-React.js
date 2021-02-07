import React from 'react';
import illu from '../../assets/img/undraw2.png';
import '../../sass/components/_content1.scss';
//import DarkMode from './Darkmode';
import CtaQuizz from '../atoms/CtaQuizz';


const Landing = () => {
    return (
        <React.Fragment>
            <h1 className="welcome">Bienvenue sur nos <span>quizz</span> !</h1>
            <section className="content1">
                <div className="txt">
                    <h1>
                        En attendant <br/>
                        la fin du covid
                    </h1>
                    <p>Travaillez votre culture de l'alcool</p>
                    <CtaQuizz href="/quizzs" txt="Voir nos quizz"></CtaQuizz>
                </div>
                <div className="illu">
                    <img src={illu} alt="illu"/>
                </div>
            </section>
        </React.Fragment>
       
    )
}

export default Landing
