import {Link} from 'react-router-dom';
import './MishMort.css'

const Nav = () => {


    return ( <div className="nav">

        <div className="pages">
            <Link className="navlink" to="/about" ><span className="navlinktext">about</span></Link>
            <Link className="navlink" to="/skillseducation"><span className="navlinktext">skills + education</span></Link>
            <img className="homelogo" src="mishmort.svg" alt="mishmort logo" width="5%"/>
            <Link className="navlink" to="/experience"><span className="navlinktext">experience</span></Link>
            <Link className="navlink" to="/projects"><span className="navlinktext">projects</span></Link>
        </div>

    </div> );
}
 
export default Nav;
