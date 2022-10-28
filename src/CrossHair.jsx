import { withTheme } from "@emotion/react";
import { useEffect, useState } from "react";

const CrossHair = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setMouse({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const classes = {
    cross: {
      backgroundColor: "white",
      //   opacity: 0.5,
      position: "absolute",
    },

    crossx: {
      width: "100vw",
      height: "1px",
      top: `calc( ${mouse.y}px + -140px)`,

      //   backgroundColor: "white",
      border: "1px dotted white",

      position: "absolute",
      pointerEvents: "none",
      opacity: 0.5,
    },

    crossy: {
      height: "100vh",
      width: "1px",
      left: `calc( ${mouse.x}px + 0px)`,
      // backgroundColor: "white",
      border: "1px dotted white",
      position: "absolute",
      pointerEvents: "none",
      opacity: 0.5,
    },
  };

  return (
    <div
      style={{
        color: "red",
        fontSize: "30px",
        position: "absolute",
        zIndex: 5,
      }}
    >
      <div className="crossx" style={classes.crossx}></div>
      <div className="crossy" style={classes.crossy}></div>
      X: {mouse.x}
      <br />
      Y: {mouse.y}
    </div>
  );
};

export default CrossHair;
