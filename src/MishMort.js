import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useRef, useState, useEffect, createContext } from "react";
import globelogo from "./assets/logos/globe.svg";
import Noise from "./assets/noise.jpg";
import "./MishMort.css";
// import Blur from "./Blur";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import SkillsEducation from "./SkillsEducation";
import Experience from "./Experience";
import Projects from "./Projects";
import NotFound from "./NotFound";
// import { device } from "./MishMort";
// import ReactDOM from "react-dom/client";
// import CrossHair from "./CrossHair";

export const MishMortContext = createContext();

function MishMort() {
  const determineDevice = () => {
    if (windowDimensions.w >= 1024) {
      return device.DESKTOP;
    } else if (windowDimensions.w >= 480) {
      return device.TABLET;
    } else {
      return device.MOBILE;
    }
  };

  let reloadtimer = useRef(true);

  const [windowDimensions, setWindowDimensions] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [currentDevice, setCurrentDevice] = useState(determineDevice());
  const [isDesktop, setIsDesktop] = useState(
    currentDevice === device.DESKTOP ? true : false
  );
  const [isTablet, setIsTablet] = useState(
    currentDevice === device.TABLET ? true : false
  );
  const [isMobile, setIsMobile] = useState(
    currentDevice === device.MOBILE ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  });

  const updateDims = () => {
    setWindowDimensions({ w: window.innerWidth, h: window.innerHeight });
    updateDevice();
  };

  const updateDevice = () => {
    if (windowDimensions.w >= 1024) {
      setCurrentDevice(device.DESKTOP);
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (windowDimensions.w >= 480) {
      setCurrentDevice(device.TABLET);
      setIsDesktop(false);
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setCurrentDevice(device.MOBILE);
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(true);
    }
  };

  const classes = {
    mishmort: {
      width: "100vw",
      maxHeight: "100vh",
    },

    main: {
      width: "100%",
      maxHeight: "100vh",
      minHeight: "100vh",
      display: "grid",
      gridTemplateRows: "1fr 8fr 1fr",
      gridTemplateColumns: "1fr",
    },

    mainTABLET: {
      width: "100%",
      maxHeight: "100vh",
      minHeight: "100vh",
      display: "grid",
      gridTemplateRows: "1fr 8fr 1fr",
      gridTemplateColumns: "1fr",
    },

    mainMOBILE: {
      padding: currentDevice === device.MOBILE ? "10px" : "",

      width: "100%",

      minHeight: windowDimensions.h,
      maxHeight: windowDimensions.h,

      display: "grid",
      gridTemplateRows: "0.5fr 9fr 0.5fr",
      gridTemplateColumns: "1fr",
    },

    content: {
      maxWidth: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    noise: {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${Noise})`,
      opacity: 0.05,
      position: "absolute",
      zIndex: 9,
      pointerEvents: "none",
    },

    blurall: {
      width: "100%",
      height: "100%",
      position: "absolute",
      filter: "blur(" + "90px" + ")",
    },

    footer: {
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "10px",
      border: currentDevice !== device.DESKTOP ? "1px solid white" : "",
    },

    globelogo: {
      marginRight: "10px",
    },
  };

  return (
    <MishMortContext.Provider
      value={{ currentDevice, windowDimensions, reloadtimer }}
    >
      <div className="mishmort" style={classes.mishmort}>
        {/* componenet that controls the colorful background */}
        {/* <Blur /> */}
        <div className="noise" style={classes.noise}></div>
        <div className="blurall" style={classes.blurall}></div>
        {console.log(windowDimensions)}
        {console.log(currentDevice)}
        <div
          className="main"
          style={
            currentDevice === device.DESKTOP
              ? classes.main
              : currentDevice === device.TABLET
              ? classes.mainTABLET
              : classes.mainMOBILE
          }
        >
          <Router basename={process.env.PUBLIC_URL}>
            <Nav currentDevice={currentDevice} />

            {/* <CrossHair></CrossHair> */}

            <div className="content textfont" style={classes.content}>
              <Switch>
                <Route exact path="/about">
                  <About />
                </Route>

                <Route exact path="/skillseducation">
                  <SkillsEducation currentDevice={currentDevice} />
                </Route>

                <Route exact path="/">
                  <Home/>
                  
                </Route>

                <Route exact path="/experience">
                  <Experience />
                </Route>

                <Route exact path="/projects">
                  <Projects />
                </Route>

                <Route exact path="/*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>

          {
            <div className="footer" style={classes.footer}>
              <img
                src={globelogo}
                alt="globe icon"
                className="globelogo"
                width="15px"
                style={classes.globelogo}
              />

              <span id="footertitle" style={classes.footertitle}>
                MISHMORT
              </span>
            </div>
          }
        </div>
      </div>
    </MishMortContext.Provider>
  );
}

export const device = {
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
  TABLET: "TABLET",
};

export default MishMort;
