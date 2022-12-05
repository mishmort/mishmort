import {
  Globe,
  Knowledge,
  Spinny,
  Mish,
  Game,
  SpinText,
  Graph,
  Pins,
  Canvas,
} from "./Stats";

import { Calculator, Avatar, Draw } from "./Interfaces";
import { device, MishMortContext } from "./MishMort";
import { createContext, useContext, useState, useEffect } from "react";

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */

export const InterfaceContext = createContext();

const Home = () => {
  const { currentDevice, reloadtimer } = useContext(MishMortContext);
  const [interfaceTimer, setInterfaceTimer] = useState(
    reloadtimer.current ? 13 : 0
  );

  const classes = {
    home: {
      //   display: "flex",
      //   flexDirection: "column",
      //   fontFamily: '"juby", sans-serif',
      //   color: "white",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   fontSize: "50px",
      //   lineHeight: "40px",
    },

    allstats: {
      display: "grid",
      gridTemplateAreas: `"globe knowledge spinny"
      "canvas mish game"
      "spintext graph pins"`,
      gridGap: "10px",
      gridTemplateRows: "1fr 1fr 1fr",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  };

  useEffect(() => {
    if (interfaceTimer > 0) {
      setTimeout(() => setInterfaceTimer(interfaceTimer - 1), 1000);
    }

    if (interfaceTimer === 1) {
      reloadtimer.current = false;
    }
  });

  return (
    // <div className={"home"} style={classes.home}>
    <InterfaceContext.Provider value={{ interfaceTimer }}>
      <div
        className={
          currentDevice === device.DESKTOP
            ? "landingpageDESKTOP"
            : "landingpage"
        }
        style={currentDevice === device.DESKTOP ? classes.allstats : {}}
      >
        {currentDevice !== device.DESKTOP ? (
          <div className="homeMobile element gridbg">
            ⛓️ THIS IS AN EXPERIMENTAL PAGE, BEST VIEWED ON A LARGER SCREEN ⛓️ <br/> 
            please check out the rest of the site
          </div>
        ) : (
          // <>
          //   <Globe />
          //   <Knowledge />
          //   <Spinny />

          //   <Canvas />
          //   <Mish />
          //   <Game />

          //   <SpinText />
          //   <Graph />
          //   <Pins />
          // </>

          <>
            <Calculator />
            <Avatar />
            <Draw />
            <Draw />
            <Avatar />
            <Calculator />
            <Calculator />
            <Avatar />
            <Draw />
          </>
        )}
      </div>
    </InterfaceContext.Provider>
  );
};

export default Home;
