import { device, MishMortContext } from "./MishMort";
import { useContext } from "react";

const SkillsEducation = () => {
  const { currentDevice } = useContext(MishMortContext);
  const skills = [
    "typescript",
    "javascript",
    "react",
    "node",
    "HTML",
    "CSS",
    "java",
    "python",
    "kotlin",
    "haskell",
    "figma",
    "illustrator",
    "photoshop",
    "after effects",
    "UX",
    "wordpress",
    "processing",
  ];

  const courses = [
    "databases",
    ["software", <br />, "development"],
    ["information", <br />, "security"],
    ["principles", <br />, "of programming"],
    ["functional", <br />, "programming"],
    ["computer", <br />, " architecture"],
    ["data structures", <br />, "& algorithms"],
    ["discrete", <br />, "math"],
  ];

  const classes = {
    skillseducation: {
      display: "grid",
      gridTemplateAreas: ` 
          "mcmaster mcmaster"
          "waterloo waterloo"
          "skills releventcourses"`,
      gridGap: "10px",
      gridTemplateRows: "1fr 1fr 1fr",
      gridTemplateColumns: "1fr 1fr",
    },

    skillcourse: {
      backgroundColor: "white",
      color: "#010614",
      fontSize: currentDevice === device.MOBILE ? "8px" : "12px",
      fontFamily: "GT Pressura Mono",
      fontWeight: currentDevice === device.MOBILE ? "600" : "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      margin:
        currentDevice !== device.DESKTOP
          ? "0px 1px 1px 0px"
          : "0px 5px 5px 0px",
    },
    skillscourses: {
      width: "100%",
      color: "white",
      textAlign: "left",
      padding: "60px 30px 20px 25px",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
    },

    mcmasterwaterloo: {
      color: "white",
      textAlign: "left",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      fontFamily: "GT Pressura Mono",
    },
  };

  return (
    <div
      className={
        currentDevice === device.DESKTOP ? "landingpageDESKTOP" : "landingpage"
      }
      style={classes.skillseducation}
    >
      <div className="mcmaster gridbg element" style={classes.mcmasterwaterloo}>
        <div className="mcmastertitle">MCMASTER UNIVERSITY</div>
        <div className="programnameinfo">
          <div id="programname">
            B.Sc.
            <br />
            Computer Science
            <br />
            <br />
          </div>
          <br />
          <div id="programinfo">
            expected graduation: 04/24
            <br />
            GPA: 3.4
          </div>
        </div>
      </div>
      <div className="waterloo gridbg element" style={classes.mcmasterwaterloo}>
        <div className="waterlootitle">UNIVERSITY OF WATERLOO</div>

        <div className="programnameinfo">
          <div id="programname">
            Global Business <br />& Digial Arts
          </div>

          <div id="programinfo">
            <br />
            09/16 - 04/18
            <br />
            GPA: 4.0
          </div>
        </div>
      </div>

      <div className="skills gridbg element" style={classes.skillscourses}>
        <div className=" title">SKILLS</div>
        {skills.map((skill) => {
          return (
            <p className="skill" style={classes.skillcourse}>
              {skill}
            </p>
          );
        })}
      </div>

      <div
        className="releventcourses gridbg element"
        style={classes.skillscourses}
      >
        <div className=" title">RELEVENT COURSES</div>

        {courses.map((course) => {
          return (
            <p className="course" style={classes.skillcourse}>
              {course}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsEducation;
