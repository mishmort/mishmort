import Resumesvg from "./assets/logos/resume.svg";
import Codepensvg from "./assets/logos/codepen.svg";
import Githubsvg from "./assets/logos/github.svg";
import Linkedinsvg from "./assets/logos/linkedin.svg";
import Twittersvg from "./assets/logos/twitter.svg";
import Resume from "./Camisha_Mortensen_Resume.pdf";
import { device, MishMortContext } from "./MishMort";
import { useContext } from "react";

const About = () => {
  const { currentDevice } = useContext(MishMortContext);

  const classes = {
    about: {
      // maxHeight: '100%',
      display: "grid",
      gridTemplateAreas: `
                "bio selfie"
                "links links"`,
      gridGap: "10px",
      gridTemplateRows: "3fr 1fr",
      gridTemplateColumns: "1fr 1fr",
    },
    aboutTABLET: {
      // maxHeight: '100%',
      display: "grid",
      gridTemplateAreas: `
                  "bio selfie"
                  "links links"`,
      gridGap: "10px",
      gridTemplateRows: "3fr 1fr",
      gridTemplateColumns: "1fr 1fr",
    },

    aboutMOBILE: {
      display: "grid",
      gridTemplateAreas: `
                  "selfie"
                  "bio"
                  "links"`,
      gridGap: "10px",
      gridTemplateRows: "1fr 8fr 1fr",
    },

    links: {
      display: "grid",
      gridGap: "10px 10px",
      gridTemplateRows: "1fr 3fr",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridArea: "links",
    },

    linksMOBILE: {
      display: "grid",
      gridGap: "10px 10px",
      // gridTemplateRows: "1fr 3fr",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridArea: "links",
    },

    link: {
      backgroundColor: "white",
      color: "#010614",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      opacity: "0.8",
      backgroundDize: "25%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },

    bio: {
      border: "1px solid white",
      color: "white",
      textAlign: "left",
      padding: "20px",
      paddingTop: "70px",
      lineHeight: "15px",
      gridArea: "bio",
      overflow: "auto",
      position: "relative",
    },

    biotext: {
      fontFamily: "GT Pressura Mono",
      fontSize: currentDevice === device.MOBILE ? "9px" : "14px",
      fontWeight: currentDevice === device.MOBILE ? "400" : "200",
    },
  };

  return (
    <div
      className={
        currentDevice === device.DESKTOP ? "landingpageDESKTOP" : "landingpage"
      }
      style={
        currentDevice === device.DESKTOP
          ? classes.about
          : currentDevice === device.TABLET
          ? classes.aboutTABLET
          : classes.aboutMOBILE
      }
    >
      <div className="bio gridbg element" style={classes.bio}>
        <div className=" title">ABOUT</div>
        <span className="biotext" style={classes.biotext}>
          Hi, I'm Misha
          <br />
          <br />
          I'm a software developer living in Toronto. I'm a fourth year computer
          science student at McMaster University and a Canadian-American dual
          citizen. I enjoy combining my love for programming and art.
          <br />
          <br />
          I started at the University of Waterloo in a design and business
          program.
          <br />
          <br />
          Now I'm working on full-stack web projects and solidifying my
          understanding of the fundamentals of computer science.
          <br />
          <br />
          Outside of my work, I spend time running, drawing, reading, playing
          games, and watching cartoons.
          <br />
          <br />
          Please check out my work and find my resume below. Feel free to reach
          out anytime!
          <br />
          <br />
          Misha :-)
        </span>
      </div>

      <div
        className={
          currentDevice === device.MOBILE
            ? "selfieMobile element gridbg"
            : "selfie element"
        }
      >
        {currentDevice === device.MOBILE && (
          <div className="selfieEyes">
            <div className="selfieEye lSelfieEye"></div>
            <div className="selfieEye rSelfieEye"></div>
          </div>
        )}
      </div>

      <div
        className="links"
        style={
          currentDevice === device.MOBILE ? classes.linksMOBILE : classes.links
        }
      >
        {currentDevice !== device.MOBILE && (
          <>
            <div className="resumetitle">RESUME</div>
            <div className="resumetitle">TWITTER</div>
            <div className="resumetitle">CODEPEN</div>
            <div className="resumetitle">LINKEDIN</div>
            <div className="resumetitle">GITHUB</div>
          </>
        )}

        {/* TODO: component + map this */}
        <a
          className="link element"
          target="_blank"
          href={Resume}
          style={{
            ...classes.link,
            ...{ backgroundImage: `url(${Resumesvg})` },
          }}
        ></a>

        <a
          className="link element"
          target="_blank"
          href="https://twitter.com/_mishmort_"
          style={{
            ...classes.link,
            ...{ backgroundImage: `url(${Twittersvg})` },
          }}
        ></a>

        <a
          className="link element"
          target="_blank"
          href="https://codepen.io/mishmort"
          style={{
            ...classes.link,
            ...{ backgroundImage: `url(${Codepensvg})` },
          }}
        ></a>

        <a
          className="link element"
          target="_blank"
          href="https://www.linkedin.com/in/camisha-mortensen-10b9b1110/"
          style={{
            ...classes.link,
            ...{ backgroundImage: `url(${Linkedinsvg})` },
          }}
        ></a>

        <a
          className="link element"
          target="_blank"
          href="https://github.com/mishmort"
          style={{
            ...classes.link,
            ...{ backgroundImage: `url(${Githubsvg})` },
          }}
        ></a>
      </div>
    </div>
  );
};

export default About;
