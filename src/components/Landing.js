import React from 'react';
import Header from './Header';
import illu from '../assets/img/undraw2.png';
import '../sass/components/_content1.scss';
import {Link} from 'react-router-dom';
import DarkMode from './Darkmode';
import CtaQuizz from './CtaQuizz';


const Landing = () => {
    return (
        <React.Fragment>
            <Header></Header> 
            <section className="content1">
                <div className="txt">
                    <h1>
                        Des Quizz incroyables
                    </h1>
                    <p>Inspiré par Yanis Elmaheh</p>
                    <CtaQuizz></CtaQuizz>
                </div>
                <div className="illu">
                    <img src={illu} alt="illu"/>
                </div>
            </section>
            <DarkMode></DarkMode>
        </React.Fragment>
       
    )
}

export default Landing