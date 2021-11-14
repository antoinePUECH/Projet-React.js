import darklogo from '../assets/img/darklight.svg';
import '../sass/components/_darkmode.scss';

function DarkMode () {
    return (
        <button className="btn">
            <img src={darklogo}/>
        </button>
    )
}

export default DarkMode