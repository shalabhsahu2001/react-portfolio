import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'M
                <img src={LogoTitle} alt="developer"/>
                Shalabh
                <br/>
                Web developer
                </h1>
                <h2>Frontend Developer / Java Expert</h2>
                <Link to = "/contact" className = 'flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;