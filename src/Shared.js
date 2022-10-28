import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

// should this be a context?
export const sharedClasses = {
    landingpage: {
        minWidth: "100%",
        height: "calc(100% - 20px)",
        margin: "10px 0px",
    }
}