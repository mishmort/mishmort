import { Link, useLocation } from "react-router-dom";
import { device, MishMortContext } from "./MishMort";
import { useState, useEffect, useContext } from "react";
import logo from "./assets/mishmortlogo.svg";
// import { isMobile, isTablet, isDesktop } from "./MishMort";

const Nav = () => {
  const { currentDevice } = useContext(MishMortContext);

  const location = useLocation();

  const [timer, setTimer] = useState(location.pathname === "/" ? 17 : 0);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  });

  const classes = {
    nav: {
      width: "100%",
      height: "100%",
      display: "inline",
      zIndex: 1,
      display: "flex",
    },

    pages: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent:
        currentDevice === device.DESKTOP ? "center" : "space-between",
      alignItems: "center",
    },

    navlink: {
      fontFamily: "GT Pressura Mono",
      fontSize: "12px",
      border: currentDevice === device.DESKTOP ? "" : "1px solid white",
      display: currentDevice === device.DESKTOP ? "inline" : "block",
      minWidth: currentDevice === device.DESKTOP ? "200px" : "",
      width: currentDevice === device.DESKTOP ? "" : "100%",
      height: currentDevice !== device.DESKTOP ? "100%" : "",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    mishmortlogo: {},
  };

  return (
    <div className="nav" style={classes.nav}>
      {
        <div className="pages" style={classes.pages}>
          <Link className="navlink" to="/about" style={classes.navlink}>
            <span className="navlinktext">about</span>
          </Link>
          <Link
            className="navlink"
            to="/skillseducation"
            style={classes.navlink}
          >
            <span className="navlinktext">
              skills +<br /> education
            </span>
          </Link>
          <Link className="navlink homelogo" to="/" style={classes.navlink}>
            <img
              src={logo}
              alt="mishmort logo"
              width="30px"
              style={classes.mishmortlogo}
            />
          </Link>
          <Link className="navlink" to="/experience" style={classes.navlink}>
            <span className="navlinktext">experience</span>
          </Link>
          <Link className="navlink" to="/projects" style={classes.navlink}>
            <span className="navlinktext">projects</span>
          </Link>
        </div>
      }
    </div>
  );
};

export default Nav;
