// should this be an object of arrays or an object of objects?
// - object of array = less code, less readable
// - object of objects = more code and repetition, clearer what everything is
import { device, MishMortContext } from "./MishMort";
import { useContext } from "react";

const exps = {
  exp0: {
    id: "alida",
    exptitle: "SOFTWARE DEVELOPMENT CO-0P",
    employer: "Alida",
    duration: "05/22 - 08/22",
    explist: [
      "Front end development",
      "Contributed to the maintenance of a cloud-based customer insight application using TypeScript and React",
    ],
  },
  exp1: {
    id: "wdc",
    exptitle: "WEB + DIGITAL CO-OP",
    employer: "McMaster University",
    duration: "05/21 - 04/22",
    explist: [
      "Developed, planned and maintained McMaster University websites",
      "Communicated with key stakeholders",
      "Designed branded graphics",
    ],
  },
  exp3: {
    id: "homg",
    exptitle: "HEAD OF MOTION GRAPHICS",
    employer: "Fashion for Change",
    duration: "11/17 - 04/18",
    explist: [
      "Created animated advertisements and graphics",
      "Social Media Management",
      "Programmed an interactive display allowing audience members to interact with the stage during the live show",
      "Took photos, shot video and edited footage for promotions",
    ],
  },
  exp2: {
    id: "tetra",
    exptitle: "APP/SERVER DEVELOPER",
    employer: "TetraTMU",
    duration: "09/22 - PRESENT",
    explist: [
      "Team member of Tetra Ryerson, a society that connects students and people with disabilities to create assistive devices",
      "Working to create an Android application using Kotlin, Arduino and Firebase allowing users to interact with hospital beds using their voice and Google Home",
    ],
  },
  // exp3: {
  //   id: "mamm",
  //   exptitle: "MARKETING + MEDIA MANAGER",
  //   employer: "UWaterloo Theatre Club",
  //   duration: "01/17 - 05/17",
  //   explist: [
  //     "Social Media Management",
  //     "Marketing",
  //     "Communications with club members",
  //   ],
  // },
};

const Experience = () => {
  const { currentDevice } = useContext(MishMortContext);

  const classes = {
    experience: {
      display: "grid",
      gridTemplateAreas: '"exp0"\n    "exp1"\n    "exp2"\n    "exp3"',
      gridTemplateRows: "1fr 1fr 1fr 1fr",
      gridTemplateColumns: "1fr",
      gridGap: "10px",
    },

    explist: {
      width: "65%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      // fontFamily: "courier-std, monospace",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "15px",
      fontSize: "14px",
      listStyleType: "square",
    },
  };

  return (
    <div
      className={
        currentDevice === device.DESKTOP
          ? "experience landingpageDESKTOP"
          : "experience landingpage"
      }
      style={classes.experience}
    >
      {[...Array(Object.keys(exps).length)].map((_, expnum) => {
        return <Exp exps={exps} expnum={expnum} />;
      })}
    </div>
  );
};

export default Experience;

const Exp = ({ exps, expnum }) => {
  const { currentDevice } = useContext(MishMortContext);
  const classes = {
    expdetails: {
      padding: "50px 0px 0px 30px",
      width: "33%",
    },

    explist: {
      width: "66%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      fontFamily: "GT Pressura Mono",
      fontWeight: 300,
      fontStyle: "normal",
      lineHeight: "15px",
      fontSize: "14px",
      listStyleType: "square",
    },

    expdetailsMOBILE: {
      padding: "0px 0px 0px 20px",
      width: "20%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    explistMOBILE: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      fontFamily: "courier-std, monospace",
      fontWeight: 500,
      lineHeight: "10px",
      fontSize: "9px",
      listStyleType: "square",
      padding: "20px 0px 0px 50px",
    },

    explistitem: {
      paddingBottom: "10px",
    },

    explistitemMOBILE: {
      paddingBottom: "5px",
    },

    // employer: {
    //   fontFamily: "GT Pressura Mono"
    // },

    // duration: {
    //   fontFamily: "GT Pressura Mono"
    // },
  };

  const exp = "exp" + expnum;

  return (
    <div className={"element gridbg exp " + exp}>
      <div id={exps[exp].id} className=" title">
        {exps[exp].exptitle}
      </div>

      <div
        className="expdetails"
        style={
          currentDevice === device.MOBILE
            ? classes.expdetailsMOBILE
            : classes.expdetails
        }
      >
        <div className="employer" style={classes.employer}>{exps[exp].employer}</div>
        <div className="duration" style={classes.duration}>{exps[exp].duration}</div>
      </div>

      <ul
        className="explist textfont"
        style={
          currentDevice === device.MOBILE
            ? classes.explistMOBILE
            : classes.explist
        }
      >
        {[...Array(exps[exp].explist.length)].map((_, explistnum) => {
          return (
            <span>
              <li
                style={
                  currentDevice === device.MOBILE
                    ? classes.explistitemMOBILE
                    : classes.explistitem
                }
              >
                {exps[exp].explist[explistnum]}
              </li>
              {/* &nbsp; */}
            </span>
          );
        })}
      </ul>
    </div>
  );
};
