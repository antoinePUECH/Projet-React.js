import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../../sass/components/_header.scss";
import logo from "../../assets/img/fi-sr-apps.svg";
import CtaQuizz from "../../components/atoms/CtaQuizz";
import { Link, Router } from "react-router-dom";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  var showData = function (data) {
    var search = document.getElementById("search").value;
    var element = document.getElementById("zone_meteo");
    element.innerHTML =
      "La temperature à " + search + " est de " + data.main.temp + "°C";
  };
  function getWeatherAPI() {
    var search = document.getElementById("search").value;
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      search +
      "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    $.get(url, showData)
      .done(function () {})
      .fail(function () {
        alert("Veuillez insérer un nom de ville correcte");
      });
  }

  return (
    <header role="banner" className={scroll ? "header-scroll" : "header"}>
      <div className="logo">
        <Router>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Router>
      </div>
      <div className="meteo">
        <input type="text" id="search" placeholder="Cherchez une ville"></input>
        <button onClick={() => getWeatherAPI()}>Cherchez</button>
        <p id="zone_meteo"></p>
      </div>
      <CtaQuizz to="/quizzs" txt="Nos quizz"></CtaQuizz>
    </header>
  );
}

export default Header;
