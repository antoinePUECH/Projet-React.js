import '../sass/components/_header.scss';
import logo from '../assets/img/fi-sr-apps.svg'

const Header = () => {
    return (
        <header className="header">
            <p>Quizz</p>
            <img src={logo}/>
        </header>
    )
}

export default Header