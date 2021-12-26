import { HashRouter as Router, Route, Switch } from "react-router-dom";
import globelogo from "./logos/globe.svg";
import "./MishMort.css";

import Blur from "./Blur";
import Nav from "./Nav";
import About from "./About";
import SkillsEducation from "./SkillsEducation";
import Experience from "./Experience";
import Projects from "./Projects";
import NotFound from "./NotFound";

function MishMort() {
  return (
    <div className="mishmort">
      <Blur />

      <div className="main">
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/skillseducation">
                <SkillsEducation />
              </Route>

              {/* COMING SOON */}
              {/* <Route exact path="/">
                <Home />
              </Route> */}

              <Route exact path="/">
                <About />
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

        <div className="footer">
          <img
            src={globelogo}
            alt="globe icon"
            className="globelogo"
            width="14%"
          />

          <span id="footertitle">MISHMORT</span>
        </div>
      </div>
    </div>
  );
}

export default MishMort;
