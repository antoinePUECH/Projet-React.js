import React from "react";
import illu from "../assets/img/undraw2.png";
import "../sass/components/_content1.scss";
//import DarkMode from './Darkmode';
import CtaQuizz from "./CtaQuizz";
import $ from "jquery";
var callBackGetSuccess = function (data) {
  console.log("donnees api", data);
  //alert("Meteo temp  : "  + data.main.temp);
  var element = document.getElementById("zone_meteo");
  element.innerHTML = "La temperature est de " + data.main.temp;
};
function buttonClickGET() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";

  $.get(url, callBackGetSuccess)
    .done(function () {
      //alert( "second success" );
    })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      //alert( "finished" );
    });
}

const Landing = () => {
  return (
    <React.Fragment>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <h1 className="welcome">
        Bienvenue sur nos <span>quizz</span> !
      </h1>
      <button onClick={() => buttonClickGET()}>api meteo</button>
      <p id="zone_meteo"></p>
      <section className="content1">
        <div className="txt">
          <h1>
            En attendant <br />
            la fin du covid
          </h1>
          <p>Travaillez votre culture de l'alcool</p>
          <CtaQuizz href="/quizzs" txt="Voir nos quizz"></CtaQuizz>
        </div>
        <div className="illu">
          <img src={illu} alt="illu" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Landing;
