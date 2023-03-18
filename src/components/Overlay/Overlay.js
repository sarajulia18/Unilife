import { React } from "react";
import "./Overlay.css";
export default function Overlay({ headingText, paraText }) {
  return (
    <div className="overlay-container">
      <div className="transparent-overlay">
        {" "}
        <h1 className="overlay-title ">{headingText}</h1>
        <p className="overlay-text">{paraText}</p>
      </div>
    </div>
  );
}
