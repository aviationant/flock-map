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
                        <img src='https://flock-map-images.s3.us-west-2.amazonaws.com/flock-i.svg' className='flock-i' />
                    </span>
                    <span className='flock-text'>ock map</span>
                </p>
            </Link>
        </div>
    </div>
    );
}

export default Title;