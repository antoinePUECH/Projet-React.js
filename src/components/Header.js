import '../sass/components/_header.scss';
import logo from '../assets/fi-sr-apps.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={logo}/>
        </header>
    )
}

export default Header