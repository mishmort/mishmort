import { device, MishMortContext } from "./MishMort";
import { useContext } from "react";

const projs = {
  proj0: {
    projtitle: "PEST MAPPER",
    projdetails: "Platform for tennants to report pest issues",
    projlist: ["React", "Java", "SpringBoot", "PostgreSQL"],
    link: "http://pestmapper-env.eba-2ypfqjyc.us-east-2.elasticbeanstalk.com/",
  },
  proj1: {
    projtitle: "WORDS OFF STREAM",
    projdetails: "Single player version of the streaming puzzle game",
    // removed HTML and CSS here
    projlist: ["React", "JavaScript"],
    link: "",
  },
  proj2: {
    projtitle: "TELESCOPE",
    projdetails:
      "App using NASA’s daily picture API, browse years of astronomy photos",
    projlist: ["JavaScript", "React"],
    link: "https://rina-chan-board.github.io/telescope/",
  },
  // proj2: {
  //   projtitle: "COLOR VISUALIZER",
  //   projdetails:
  //     "Interactive graphics display allowing audience to change stage backdrop via Twitter",
  //   projlist: ["JavaScript", "Processing"],
  //   link: "",
  // },
  proj3: {
    projtitle: "MISHEGG",
    projdetails: "Grade calculator app for students",
    projlist: ["React", "JavaScript"],
    link: "",
  },
};

const Projects = () => {
  const { currentDevice } = useContext(MishMortContext);

  const classes = {
    projects: {
      display: "grid",
      gridTemplateAreas: '"proj0 proj1"\n    "proj2 proj3"',
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gridGap: "10px",
    },
  };

  return (
    <div
      className={
        currentDevice === device.DESKTOP
          ? "projects landingpageDESKTOP"
          : "projects landingpage"
      }
      style={classes.projects}
    >
      {[...Array(Object.keys(projs).length)].map((_, projnum) => {
        return <Proj projs={projs} projnum={projnum} />;
      })}
    </div>
  );
};

export default Projects;

const Proj = ({ projs, projnum }) => {
  const { currentDevice } = useContext(MishMortContext);

  const classes = {
    thumb: {
      // idk this just kinda works
      width: currentDevice === device.MOBILE ? "35vw" : "60%",
      height: currentDevice === device.MOBILE ? "35vw" : "60%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      opacity: 0.9,
      border: "1px solid white",
      // filter: "grayscale(100%)",
    },
  };

  const proj = "proj" + projnum;
  return (
    <div className={"element gridbg proj " + proj}>
      <div className=" title">{projs[proj].projtitle}</div>
      <div className={"thumb thumb" + projnum} style={classes.thumb}></div>

      <div className="projdetails">
        <p>{projs[proj].projdetails}</p>

        <ul id="projlist">
          {[...Array(projs[proj].projlist.length)].map((_, projlistnum) => {
            return (
              <span>
                <li>{projs[proj].projlist[projlistnum]}</li>{" "}
              </span>
            );
          })}
        </ul>

        {projs[proj].link && (
          <a href={projs[proj].link} target="_blank" className="projlink">
            VIEW {projs[proj].projtitle}
          </a>
        )}
      </div>
    </div>
  );
};
