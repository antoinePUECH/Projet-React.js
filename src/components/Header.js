import React, {useState, useEffect} from 'react';

import '../sass/components/_header.scss';
import logo from '../assets/img/fi-sr-apps.svg'

function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        });
    }, [])

    return (
        <header role="banner" className={scroll ? "header-scroll" : "header"}>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header