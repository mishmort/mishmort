import {Link, useLocation} from 'react-router-dom';
import './MishMort.css'
import {useState, useEffect} from 'react';

const Nav = () => {

    const location = useLocation()

    const [timer, setTimer] = useState(location.pathname === "/" ? 16 : 0)

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
        } 
    })

    return ( <div className="nav">

        {timer === 0 && <div className="pages">
            <Link className="navlink" to="/about" ><span className="navlinktext">about</span></Link>
            <Link className="navlink" to="/skillseducation"><span className="navlinktext">skills + education</span></Link>
            <Link className="navlink" to="/"><img className="homelogo" src="mishmortlogo.svg" alt="mishmort logo" width="30%"/></Link>
            <Link className="navlink" to="/experience"><span className="navlinktext">experience</span></Link>
            <Link className="navlink" to="/projects"><span className="navlinktext">projects</span></Link>
        </div>}

    </div> );
}
 
export default Nav;