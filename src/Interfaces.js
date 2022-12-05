import { useState, useEffect, useRef, useCallback } from "react";
import { MishMortContext } from "./MishMort";
import { InterfaceContext } from "./Home";
import { useContext } from "react";
import "./Interfaces.css";
import Slider from "@mui/material/Slider";

//TODO: clean this up
import {
  Head,
  Body,
  Ears,
  Freckles,
  Eyes1,
  Eyes2,
  Eyes3,
  Eyes4,
  Eyes5,
  Eyes6,
  Eyes7,
  Eyes8,
  Hair1,
  Hair2,
  Hair3,
  Hair4,
  Hair5,
  Hair6,
  Hat1,
  Hat2,
  Hat3,
  Hat4,
  Hat5,
  Hat6,
  Hat7,
  Mouth1,
  Mouth2,
  Mouth3,
  Mouth4,
  Mouth5,
  Mouth6,
  Mouth7,
} from "./assets/index";

const allEyes = [Eyes1, Eyes2, Eyes3, Eyes4, Eyes5, Eyes6, Eyes7, Eyes8];
const allHair = [Hair1, Hair2, Hair3, Hair4, Hair5, Hair6];
const allHat = [Hat1, Hat2, Hat3, Hat4, Hat5, Hat6, Hat7];
const allMouth = [Mouth1, Mouth2, Mouth3, Mouth4, Mouth5, Mouth6, Mouth7];

const baseClasses = "stat element gridbg ";

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// CALCULATOR

// + - = / * ()

const Calculator = () => {
  const { reloadtimer } = useContext(MishMortContext);
  const { interfaceTimer } = useContext(InterfaceContext);

  const [results, setResults] = useState("");
  const [expression, setExpression] = useState([]);

  const calcButtonClick = (value) => {
    setResults("");
    setExpression([...expression, value]);
  };

  const handleResults = () => {
    const ans = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setResults(ans);
    setExpression("");
  };

  const clearResults = () => {
    setResults();
    setExpression("");
  };

  const classes = {
    numberbuttongrid: {
      display: "grid",
      gridTemplateAreas: `
      "calcresults calcresults calcresults calcresults calcresults "
      "num7 num8 num9 calcclear calcclear"
      "num4 num5 num6 calcadd calcsub"
      "num1 num2 num3 calcdiv calcmult"
      "num0 calcenter calcenter calcenter calcenter"
      `,
      gridGap: "1px",
      gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    },
  };

  return (
    <div
      className={interfaceTimer > 10 ? baseClasses + "logoAni" : baseClasses}
    >
      {interfaceTimer <= 9 && (
        <div className="innerCalculator innerStat">
          <div className="numberbuttongrid" style={classes.numberbuttongrid}>
            <div className="calcresults" style={{ gridArea: "calcresults" }}>
              {results ? results : expression}
            </div>
            {[...Array(10).keys()].map((value) => {
              return (
                <CalcButton
                  value={value}
                  key={value}
                  calcButtonClick={calcButtonClick}
                ></CalcButton>
              );
            })}
            <div
              className="calcclear buttonbounce"
              style={{ gridArea: "calcclear" }}
              onClick={() => clearResults()}
            >
              CLEAR
            </div>

            <div
              className="calcadd buttonbounce"
              style={{ gridArea: "calcadd" }}
              onClick={() => calcButtonClick("+")}
            >
              +
            </div>
            <div
              className="calcsub buttonbounce"
              style={{ gridArea: "calcsub" }}
              onClick={() => calcButtonClick("-")}
            >
              -
            </div>
            <div
              className="calcdiv buttonbounce"
              style={{ gridArea: "calcdiv" }}
              onClick={() => calcButtonClick("%")}
            >
              %
            </div>
            <div
              className="calcmult buttonbounce"
              style={{ gridArea: "calcmult" }}
              onClick={() => calcButtonClick("x")}
            >
              x
            </div>

            {/* <div
              className="calcdot buttonbounce"
              style={{ gridArea: "calcdot" }}
              onClick={() => calcButtonClick(".")}
            >
              .
            </div> */}

            <div
              className="calcenter buttonbounce"
              style={{ gridArea: "calcenter" }}
              onClick={() => handleResults()}
            >
              ENTER
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CalcButton = (props) => {
  const { value, calcButtonClick } = props;

  const s = "num" + value.toString();

  const classes = {
    calcbutton: {
      gridArea: s,
    },
  };

  // console.log("this should be numbers 1-9: ", s);
  return (
    <div
      className="calcbutton buttonbounce"
      // TODO: idk why tf this grid area isn't working...
      style={classes.calcbutton}
      onClick={() => calcButtonClick(value)}
    >
      <div className="innercalcbutton">
        <div
          style={{
            fontFamily: "GT Pressura Mono",
            // lineHeight: "5px"
          }}
        >
          --
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "block",
              wordWrap: "break-word",
              whiteSpace: "normal",
              // lineHeight: "5px",
            }}
          >
            {"·".repeat(value)}
          </span>
        </div>
        <br />
        <span className="numbervalue">{"0" + value}</span>
      </div>
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// AVATAR

const Avatar = () => {
  // TODO: idk why there's a reloadtimer and an interfacetimer, might have to do with the reference, review that
  // TODO:
  const { reloadtimer } = useContext(MishMortContext);
  const { interfaceTimer } = useContext(InterfaceContext);

  const [hair, setHair] = useState(4);
  const [eyes, setEyes] = useState(4);
  const [mouth, setMouth] = useState(4);
  const [hat, setHat] = useState(4);

  // TODO: save the total number of each body part somewhere

  const [bodyPart, setBodyPart] = useState("HAIR");

  const classes = {
    drawings: {
      width: "100%",
      marginTop: "10px",
      position: "absolute",
    },
  };

  const leftButton = () => {
    switch (bodyPart) {
      case "HAIR":
        hair == 1 ? setHair(6) : setHair(hair - 1);
        break;
      case "EYES":
        eyes == 1 ? setEyes(8) : setEyes(eyes - 1);
        break;

      case "MOUTH":
        mouth == 1 ? setMouth(7) : setMouth(mouth - 1);
        break;
      case "HAT":
        hat == 1 ? setHat(7) : setHat(hat - 1);
        break;
      default:
      // code block
    }
  };

  const rightButton = () => {
    switch (bodyPart) {
      case "HAIR":
        hair == 6 ? setHair(1) : setHair(hair + 1);
        break;
      case "EYES":
        eyes == 8 ? setEyes(1) : setEyes(eyes + 1);
        break;

      case "MOUTH":
        mouth == 7 ? setMouth(1) : setMouth(mouth + 1);
        break;
      case "HAT":
        hat == 7 ? setHat(1) : setHat(hat + 1);
        break;
      default:
      // code block
    }
  };

  const randomize = () => {
    setHair(Math.floor(Math.random() * 6) + 1);
    setEyes(Math.floor(Math.random() * 8) + 1);
    setMouth(Math.floor(Math.random() * 7) + 1);
    setHat(Math.floor(Math.random() * 7) + 1);
  };

  return (
    <div
      className={interfaceTimer > 10 ? baseClasses + "logoAni" : baseClasses}
    >
      {interfaceTimer <= 8 && (
        <div className="innerAvatar innerStat">
          <div className="avatarTitle">MISHMORT</div>

          <div className="buttonsAvatar">
            <button
              className="leftAvatar avatarButton buttonbounce"
              onClick={leftButton}
            >
              <span className="chevron">&#171;</span>
            </button>
            <div className="avatarWindow">
              <img src={Head} style={classes.drawings}></img>
              <img src={Body} style={classes.drawings}></img>
              <img src={Ears} style={classes.drawings}></img>
              <img src={Freckles} style={classes.drawings}></img>

              <img src={allHair[hair - 1]} style={classes.drawings}></img>
              <img src={allEyes[eyes - 1]} style={classes.drawings}></img>
              <img src={allMouth[mouth - 1]} style={classes.drawings}></img>
              <img src={allHat[hat - 1]} style={classes.drawings}></img>
            </div>

            <div className="rightbuttondice">
              <div className="dice buttonbounce" onClick={randomize}></div>
              <button
                className="rightAvatar avatarButton buttonbounce"
                onClick={rightButton}
              >
                <span className="chevron">&#187;</span>
              </button>
            </div>
          </div>

          <div className="numbers1">
            <span className="number1">HAIR</span>
            <span className="number1">EYES</span>
            <span className="number1">MOUTH</span>
            <span className="number1">HAT</span>
          </div>

          {/* TODO: change stupid name */}
          <div className="bodyPartButtons">
            <button className="buttonbounce">
              <div
                className={
                  bodyPart == "HAIR"
                    ? "hairbutton bodyPartButton  selectedBodyPartButton"
                    : "hairbutton bodyPartButton "
                }
                onClick={() => {
                  setBodyPart("HAIR");
                }}
              ></div>
            </button>

            <button className="buttonbounce">
              <div
                className={
                  bodyPart == "EYES"
                    ? "eyesbutton bodyPartButton  selectedBodyPartButton"
                    : "eyesbutton bodyPartButton "
                }
                onClick={() => {
                  setBodyPart("EYES");
                }}
              ></div>
            </button>

            <button className="buttonbounce">
              <div
                label="MOUTH"
                className={
                  bodyPart == "MOUTH"
                    ? "mouthbutton bodyPartButton  selectedBodyPartButton"
                    : "mouthbutton bodyPartButton "
                }
                onClick={() => {
                  setBodyPart("MOUTH");
                }}
              ></div>
            </button>

            <button className="buttonbounce">
              <div
                className={
                  bodyPart == "HAT"
                    ? "hatbutton bodyPartButton  selectedBodyPartButton"
                    : "hatbutton bodyPartButton "
                }
                onClick={() => {
                  setBodyPart("HAT");
                }}
              ></div>
            </button>
          </div>

          <div className="numbers2">
            <div className="number2">{hair} / 6 </div>
            <div className="number2">{eyes} / 8</div>
            <div className="number2">{mouth} / 7</div>
            <div className="number2">{hat} / 7</div>
          </div>

          {/* <div className="highlighter"></div> */}
        </div>
      )}
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// DRAW

const Draw = () => {
  // TODO: idk why there's a reloadtimer and an interfacetimer, might have to do with the reference, review that
  // TODO:
  const { reloadtimer } = useContext(MishMortContext);
  const { interfaceTimer } = useContext(InterfaceContext);

  const [isDrawing, setIsDrawing] = useState(false);
  const canvasref = useRef(null);
  const [mousePosition, setMousePosition] = useState(undefined);
  const [thickness, setThickness] = useState(1);

  // get the mouse coords and save their position, we are now drawing
  const startDraw = useCallback((event) => {
    // console.log("AAA")
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsDrawing(true);
    }
  });

  // when the mouse enters the canvas start drawing
  useEffect(() => {
    // console.log("BBB")

    if (!canvasref.current) {
      return;
    }

    const canvas = canvasref.current;
    canvas.addEventListener("mouseenter", startDraw);
    return () => {
      canvas.removeEventListener("mouseenter", startDraw);
    };
  }, [startDraw]);

  // return the mouse coords
  const getCoordinates = (event) => {
    // console.log("CCC")

    // if you cant find the canvas do nothing
    if (!canvasref.current) {
      return;
    }

    let x = event.offsetX;
    let y = event.offsetY;
    console.log("x, y: ", x, y);

    return { x, y };
  };

  // once we are drawing
  // draw new lines as the mouse position changes
  const draw = useCallback(
    (event) => {
      // console.log("DDD")

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

  // continue drawing lines as the mouse moves
  // TODO: can i combine this w the other similar one?
  useEffect(() => {
    if (!canvasref.current) {
      return;
    }

    // console.log("EEE")

    const canvas = canvasref.current;
    canvas.addEventListener("mousemove", draw);
    return () => {
      canvas.removeEventListener("mousemove", draw);
    };
  }, [draw]);

  // stop drawing and stop tracking the mouse position
  const exitDraw = useCallback(() => {
    console.log("FFF");

    setIsDrawing(false);
    setMousePosition(undefined);
  });

  // when the mouse leaves the canvas stop drawing
  useEffect(() => {
    if (!canvasref.current) {
      return;
    }

    console.log("GGG");

    const canvas = canvasref.current;
    canvas.addEventListener("mouseleave", exitDraw);
    return () => {
      canvas.removeEventListener("mouseleave", exitDraw);
    };
  }, [exitDraw]);

  // draws lines on the canvas
  const drawLine = (originalMousePosition, newMousePosition) => {
    // if you cant find the canvas do nothing
    if (!canvasref.current) {
      return;
    }

    // hold the canvas ref
    const canvas = canvasref.current;
    // makes the canvas 2d
    const context = canvas.getContext("2d");

    // if everything worked so far
    if (context) {
      // set the brush style
      // TODO: make some of this changable
      context.strokeStyle = "white";
      context.lineJoin = "round";
      context.lineWidth = thickness;

      // starts drawing
      context.beginPath();
      // where to start (creates a subpath here)
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      // where to end (draws line to most recenet subpath)
      context.lineTo(newMousePosition.x, newMousePosition.y);
      // closes off a path to the start if possible
      context.closePath();
      // sets the stroke style over the path you just drew
      context.stroke();
    }
  };

  const Placeholder = () => {
    return (
      <div className="phwrap">
        <div className="ph phx"></div>
        <div className="ph phy"></div>
      </div>
    );
  };

  const sliderMove = (event, newValue) => {
    setThickness(newValue);
  };

  const clearCanvas = () => {
    if (!canvasref.current) {
      return;
    }

    // hold the canvas ref
    const canvas = canvasref.current;
    // makes a the canvas 2d
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      className={interfaceTimer > 10 ? baseClasses + "logoAni" : baseClasses}
    >
      {interfaceTimer <= 7 && (
        <div className="innerCanvas innerStat">
          {!isDrawing && <Placeholder />}
          <canvas className="canvas" width="140" height="140" ref={canvasref} />
          <span className="thicknessText">
            <span>thickness</span>
            <span className="thicknessbox">{thickness}</span>
          </span>
          <Slider
            size="small"
            aria-label="Small"
            value={thickness}
            onChange={sliderMove}
            min={1}
            max={4}
            style={{ zIndex: 1 }}
            valueLabelDisplay="off"
          />

          <div className="clearcanvas buttonbounce" onClick={clearCanvas}>
            CLEAR
          </div>
        </div>
      )}
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER4
const World = () => {
  const { interfaceTimer } = useContext(InterfaceContext);

  return (
    <div
      className={interfaceTimer > 10 ? baseClasses + "logoAni" : baseClasses}
    >
      {interfaceTimer <= 6 && <div className="innerWorld innerStat"></div>}
    </div>
  );
};

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER5

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER6

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER7

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER8

/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */
// INTER9

export { Calculator, Avatar, Draw, World };
