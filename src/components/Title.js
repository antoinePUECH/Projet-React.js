import '../sass/components/_header.scss';
import '../sass/components/_title.scss';

const Title = (props) => {
    return (
        <div className="title">
            <h1>{props.txt}</h1>
        </div>
    )
}

export default Title