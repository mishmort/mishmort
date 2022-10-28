import { useState, useEffect, useRef, useCallback } from "react";
import { MishMortContext } from "./MishMort";
import { useContext } from "react";

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */

const Globe = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer1, setTimer1] = useState(reloadtimer.current ? 13 : 0);
  console.log(reloadtimer);
  console.log(timer1);

  let globestyle = {
    color: "white",
    opacity: timer1 < 9 ? "100%" : "0%",
    fontSize: "15px",
    gridArea: "globe",
  };

  useEffect(() => {
    if (timer1 > 0) {
      setTimeout(() => setTimer1(timer1 - 1), 1000);
    }

    // if (timer1 === 1) {
    //   reloadtimer.current = false;
    // }
  });

  return (
    <div
      className={
        timer1 >= 10
          ? "stat statani outerglobe element gridbg"
          : "stat outerglobe element gridbg"
      }
    >
      <div className="innerglobe globe" style={globestyle}></div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// KNOWLEDGE

const Knowledge = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer2, setTimer2] = useState(reloadtimer.current ? 13 : 0);

  let knowledgestyle = {
    color: "white",
    opacity: timer2 < 8 ? "100%" : "0%",
    fontSize: "15px",
    gridArea: "knowledge",
  };

  useEffect(() => {
    if (timer2 > 0) {
      setTimeout(() => setTimer2(timer2 - 1), 1000);
    }
    if (timer2 === 1) {
      reloadtimer.current = false;
    }
  });

  return (
    <div
      className={
        timer2 >= 10 ? "stat statani element gridbg" : "stat element gridbg"
      }
    >
      <div className="innerknowledge" style={knowledgestyle}>
        <div className="bar">
          <div className="innerbar bar1"></div>
        </div>

        <div className="bar">
          <div className="innerbar bar2"></div>
        </div>

        <div className="bar">
          <div className="innerbar bar3"></div>
        </div>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */

const Canvas = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [isDrawing, setIsDrawing] = useState(false);
  const canvasref = useRef(null);
  const [mousePosition, setMousePosition] = useState(undefined);
  const [timer3, setTimer3] = useState(reloadtimer.current ? 13 : 0);

  const startDraw = useCallback((event) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsDrawing(true);
    }
  }, []);

  useEffect(() => {
    if (!canvasref.current) {
      return;
    }

    const canvas = canvasref.current;
    canvas.addEventListener("mouseenter", startDraw);
    return () => {
      canvas.removeEventListener("mouseenter", startDraw);
    };
  }, [startDraw]);

  const draw = useCallback(
    (event) => {
      if (isDrawing) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isDrawing, mousePosition]
  );

  useEffect(() => {
    if (!canvasref.current) {
      return;
    }

    const canvas = canvasref.current;
    canvas.addEventListener("mousemove", draw);
    return () => {
      canvas.removeEventListener("mousemove", draw);
    };
  }, [draw]);

  const exitDraw = useCallback(() => {
    setIsDrawing(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasref.current) {
      return;
    }

    const canvas = canvasref.current;
    canvas.addEventListener("mouseleave", exitDraw);
    return () => {
      canvas.removeEventListener("mouseleave", exitDraw);
    };
  }, [exitDraw]);

  const getCoordinates = (event) => {
    if (!canvasref.current) {
      return;
    }

    let x = event.offsetX;
    let y = event.offsetY;

    return { x, y };
  };

  const drawLine = (originalMousePosition, newMousePosition) => {
    if (!canvasref.current) {
      return;
    }

    const canvas = canvasref.current;
    const context = canvas.getContext("2d");

    if (context) {
      context.strokeStyle = "white";
      context.lineJoin = "round";
      context.lineWidth = 0.5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);

      context.closePath();
      context.stroke();
    }
  };

  let canvasstyle = {};

  useEffect(() => {
    if (timer3 > 0) {
      setTimeout(() => setTimer3(timer3 - 1), 1000);
    }

    if (timer3 === 1) {
      reloadtimer.current = false;
    }
  });

  const Placeholder = () => {
    return (
      <div className={timer3 >= 6 ? "statafter" : "placeholderwrap"}>
        <div className="ph phx"></div>
        <div className="ph phy"></div>
      </div>
    );
  };

  return (
    <div
      style={{ gridArea: "canvas", width: "100%", height: "100%" }}
      className={
        timer3 >= 10
          ? "stat statani outerdraw element gridbg"
          : timer3 >= 6
          ? "stat element gridbg"
          : "stat outerdraw element gridbg"
      }
    >
      {!isDrawing && <Placeholder />}

      <canvas
   
        style={canvasstyle}
        className={timer3 >= 7 ? "canv statafter" : "canv"}
        ref={canvasref}
        width="200"
        height="200"
      />
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// SPINNY

const Spinny = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer4, setTimer4] = useState(reloadtimer.current ? 13 : 0);

  let spinnystyle = {
    opacity: timer4 < 7 ? "100%" : "0%",
    gridArea: "spinny",
  };

  useEffect(() => {
    if (timer4 > 0) {
      setTimeout(() => setTimer4(timer4 - 1), 1000);
    }

    if (timer4 === 1) {
      reloadtimer.current = false;
    }
  });

  return (
    <div className={timer4 >= 10 ? "stat statani element gridbg" : "stat element gridbg"}>
      <div className="innerspinny" style={spinnystyle}>
        <div className="thincircle"></div>
        <div className="thickcircle"></div>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// MISH

const Mish = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer5, setTimer5] = useState(reloadtimer.current ? 13 : 0);

  let mishstyle = {
    color: "white",
    opacity: timer5 < 5 ? "100%" : "0%",
    fontSize: "15px",
    gridArea: "mish",
  };

  useEffect(() => {
    if (timer5 > 0) {
      setTimeout(() => setTimer5(timer5 - 1), 1000);
    }

    if (timer5 === 1) {
      reloadtimer.current = false;
    }
  });

  const leye = useRef(null);
  const reye = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveeye = useCallback((event) => {
    setX(-(window.innerWidth / 2 - event.pageX) / 90);
    setY(-(window.innerHeight / 2 - event.pageY) / 190);
  }, []);

  useEffect(() => {
    if (!leye.current | !reye.current) {
      return;
    }

    const lefteye = leye.current;
    const righteye = reye.current;

    window.addEventListener("mousemove", moveeye);

    return () => {
      lefteye.removeEventListener("mousemove", moveeye);
      righteye.removeEventListener("mousemove", moveeye);
    };
  }, [moveeye]);

  return (
    <div
      className={
        timer5 >= 10
          ? "stat statani outermish element gridbg"
          : "stat outermish element gridbg"
      }
    >
      <div className="innermish" style={mishstyle}>
        <div className="eyewrap">
          <div
            className="eye leye"
            style={{
              transition: "transform 0.1s",
              transform: "translateY(" + y + "px) translateX(" + x + "px)",
            }}
            ref={leye}
          ></div>
          <div
            className="eye reye"
            style={{
              transition: "transform 0.1s",
              transform: "translateY(" + y + "px) translateX(" + x + "px)",
            }}
            ref={reye}
          ></div>
        </div>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// GAME

const Game = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [timer6, setTimer6] = useState(reloadtimer.current ? 13 : 0);
  const [active, setActive] = useState(rnd(0, 8));

  let gamestyle = {
    opacity: timer6 < 4 ? "100%" : "0%",
    gridArea: "game",
  };

  let activestyle = {
    backgroundColor: "white",
  };

  useEffect(() => {
    if (timer6 > 0) {
      setTimeout(() => setTimer6(timer6 - 1), 1000);
    }

    if (timer6 === 1) {
      reloadtimer.current = false;
    }
  });

  const changeActive = (a) => {
    setActive(rnd(0, 8));
  };

  return (
    <div
      className={
        timer6 >= 10
          ? "stat statani outergame element gridbg"
          : "stat outergame element gridbg"
      }
    >
      <div className="innergame" style={gamestyle}>
        <button
          className="button"
          style={active === 0 ? activestyle : {}}
          onMouseEnter={active === 0 ? () => changeActive(0) : () => {}}
        ></button>

        <button
          className="button"
          style={active === 1 ? activestyle : {}}
          onMouseEnter={active === 1 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 2 ? activestyle : {}}
          onMouseEnter={active === 2 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 3 ? activestyle : {}}
          onMouseEnter={active === 3 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 4 ? activestyle : {}}
          onMouseEnter={active === 4 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 5 ? activestyle : {}}
          onMouseEnter={active === 5 ? () => changeActive() : () => {}}
        ></button>
        <button
          className="button"
          style={active === 6 ? activestyle : {}}
          onMouseEnter={active === 6 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 7 ? activestyle : {}}
          onMouseEnter={active === 7 ? () => changeActive() : () => {}}
        ></button>

        <button
          className="button"
          style={active === 8 ? activestyle : {}}
          onMouseEnter={active === 8 ? () => changeActive() : () => {}}
        ></button>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// SPINTEXT

const SpinText = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer7, setTimer7] = useState(reloadtimer.current ? 13 : 0);

  let spintextstyle = {
    color: "white",
    opacity: timer7 < 3 ? "100%" : "0%",
    gridArea: "spintext",
  };

  useEffect(() => {
    if (timer7 > 0) {
      setTimeout(() => setTimer7(timer7 - 1), 1000);
    }

    if (timer7 === 1) {
      reloadtimer.current = false;
    }
  });

  return (
    <div
      className={
        timer7 >= 10
          ? "stat statani outerspintext element gridbg"
          : "stat outerspintext element gridbg"
      }
    >
      <div className="innerspintext" style={spintextstyle}>
        <div class="text">
          <span style={{ transform: "rotate(" + 0 * 10 + "deg)" }}>t</span>
          <span style={{ transform: "rotate(" + 1 * 10 + "deg)" }}>h</span>
          <span style={{ transform: "rotate(" + 2 * 10 + "deg)" }}>i</span>
          <span style={{ transform: "rotate(" + 3 * 10 + "deg)" }}>n</span>
          <span style={{ transform: "rotate(" + 4 * 10 + "deg)" }}>g</span>
          <span style={{ transform: "rotate(" + 5 * 10 + "deg)" }}>s</span>
          <span style={{ transform: "rotate(" + 6 * 10 + "deg)" }}> </span>

          <span style={{ transform: "rotate(" + 7 * 10 + "deg)" }}>a</span>
          <span style={{ transform: "rotate(" + 8 * 10 + "deg)" }}>r</span>
          <span style={{ transform: "rotate(" + 9 * 10 + "deg)" }}>e</span>
          <span style={{ transform: "rotate(" + 10 * 10 + "deg)" }}>n</span>
          <span style={{ transform: "rotate(" + 11 * 10 + "deg)" }}>'</span>
          <span style={{ transform: "rotate(" + 12 * 10 + "deg)" }}>t</span>
          <span style={{ transform: "rotate(" + 13 * 10 + "deg)" }}> </span>

          <span style={{ transform: "rotate(" + 14 * 10 + "deg)" }}>a</span>
          <span style={{ transform: "rotate(" + 15 * 10 + "deg)" }}>l</span>
          <span style={{ transform: "rotate(" + 16 * 10 + "deg)" }}>w</span>
          <span style={{ transform: "rotate(" + 17 * 10 + "deg)" }}>a</span>
          <span style={{ transform: "rotate(" + 18 * 10 + "deg)" }}>y</span>
          <span style={{ transform: "rotate(" + 19 * 10 + "deg)" }}>s</span>
          <span style={{ transform: "rotate(" + 20 * 10 + "deg)" }}> </span>

          <span style={{ transform: "rotate(" + 21 * 10 + "deg)" }}>w</span>
          <span style={{ transform: "rotate(" + 22 * 10 + "deg)" }}>h</span>
          <span style={{ transform: "rotate(" + 23 * 10 + "deg)" }}>a</span>
          <span style={{ transform: "rotate(" + 24 * 10 + "deg)" }}>t</span>
          <span style={{ transform: "rotate(" + 25 * 10 + "deg)" }}> </span>

          <span style={{ transform: "rotate(" + 26 * 10 + "deg)" }}>t</span>
          <span style={{ transform: "rotate(" + 27 * 10 + "deg)" }}>h</span>
          <span style={{ transform: "rotate(" + 28 * 10 + "deg)" }}>e</span>
          <span style={{ transform: "rotate(" + 29 * 10 + "deg)" }}>y</span>
          <span style={{ transform: "rotate(" + 30 * 10 + "deg)" }}> </span>

          <span style={{ transform: "rotate(" + 31 * 10 + "deg)" }}>s</span>
          <span style={{ transform: "rotate(" + 32 * 10 + "deg)" }}>e</span>
          <span style={{ transform: "rotate(" + 33 * 10 + "deg)" }}>e</span>
          <span style={{ transform: "rotate(" + 34 * 10 + "deg)" }}>m</span>
        </div>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// GRAPH
const Graph = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer8, setTimer8] = useState(reloadtimer.current ? 13 : 0);

  let graphstyle = {
    color: "white",
    opacity: timer8 < 2 ? "100%" : "0%",
    fontSize: "15px",
    gridArea: "graph",
  };

  useEffect(() => {
    if (timer8 > 0) {
      setTimeout(() => setTimer8(timer8 - 1), 1000);
    }

    if (timer8 === 1) {
      reloadtimer.current = false;
    }
  });

  return (
    <div
      className={
        timer8 >= 10 ? "stat statani element gridbg" : "stat element gridbg"
      }
    >
      <div className="innergraph" style={graphstyle}>
        <svg
          className="out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 373.74 244.34"
        >
          <defs></defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon
                class="cls-1"
                points="163.32 23.09 55.32 81.09 1.42 174.64 125.32 230.09 218.32 214.09 287.32 243.09 372.5 114.79 277.32 1.09 163.32 23.09"
              />
            </g>
          </g>
        </svg>
        <svg
          className="mid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 199.31 160.14"
        >
          <defs></defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon
                class="cls-1"
                points="12.52 33.08 1.02 103.59 12.52 159.07 179.52 144.08 198.19 46.66 119.52 1.08 12.52 33.08"
              />
            </g>
          </g>
        </svg>
        <svg
          className="inn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.56 85.08"
        >
          <defs></defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon
                class="cls-1"
                points="32.48 8.04 123.48 1.04 143.48 24.04 134.48 68.04 67.48 84.04 1.48 61.04 32.48 8.04"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// PINS

const Pins = () => {
  const { reloadtimer } = useContext(MishMortContext);

  const [timer9, setTimer9] = useState(reloadtimer.current ? 13 : 0);

  let pinsstyle = {
    opacity: timer9 < 1 ? "100%" : "0%",
    gridArea: "pins",
  };

  useEffect(() => {
    if (timer9 > 0) {
      setTimeout(() => setTimer9(timer9 - 1), 1000);
    }

    // if (timer9 === 1) {
    //   reloadtimer.current = false;
    // }
  });

  const Pin = ({ pinid }) => {
    const [y, setY] = useState(0);

    let move = 0;
    useEffect(() => {
      const interval = setInterval(() => {
        move += pinid / 5;

        setY(Math.sin(move) * 10);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    let pinstyle = {
      transition: "transform 1s",
      transform: "rotate(" + pinid * 30 + "deg) translateY(" + y + "px)",
    };

    return <div className="pin" style={pinstyle}></div>;
  };

  return (
    <div
      className={
        timer9 >= 10 ? "stat statani element gridbg" : "stat element gridbg"
      }
    >
      <div className="innerpins" style={pinsstyle}>
        <div className="pinbody"></div>

        {[...Array(12).keys()].map((pinid) => {
          return <Pin pinid={pinid}></Pin>;
        })}
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */

export { Globe, Knowledge, Spinny, Mish, Game, SpinText, Graph, Pins, Canvas };
