import { Link } from "react-router";
import '../App.css';

function Title() {

    return (

    <div className='title-block'>
        <div className='col'>
            <Link reloadDocument to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <p className='lato-regular flock-title'>
                    <span className='flock-text'>f</span>
                    <span className='flock-image-wrapper'>
                        <img src={'url(https://drive.google.com/file/d/1oYUD0vXImuCxOkg6kn4i1CSjZqPYcYxq)'} className='flock-i' />
                    </span>
                    <span className='flock-text'>ock map</span>
                </p>
            </Link>
        </div>
    </div>
    );
}

export default Title;