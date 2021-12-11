import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Router basename="/mishmort/">
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/mishmort/about">
                <About />
              </Route>

              <Route exact path="/mishmort/skillseducation">
                <SkillsEducation />
              </Route>

              {/* COMING SOON */}
              {/* <Route exact path="/">
                <Home />
              </Route> */}

              <Route exact path="/mishmort">
                <About />
              </Route>

              <Route exact path="/mishmort/experience">
                <Experience />
              </Route>

              <Route exact path="/msihmort/projects">
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
