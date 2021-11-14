import React, { useState, useEffect } from "react";

import "../sass/components/_header.scss";
import logo from "../assets/img/fi-sr-apps.svg";
import CtaQuizz from "../components/CtaQuizz";
import { Link, Router } from "react-router-dom";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header role="banner" className={scroll ? "header-scroll" : "header"}>
      <div className="logo">
        <Router>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Router>
      </div>
      <CtaQuizz href="/quizzs" txt="Nos quizz"></CtaQuizz>
    </header>
  );
}

export default Header;
