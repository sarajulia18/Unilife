import React from "react";
import "./styles.css";

import CityCards from "../components/CityCards/CityCards";
import Overlay from "../components/Overlay/Overlay";
import Compare from "../components/Compare/Compare";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Overlay
        headingText={"Find student homes with bills included"}
        paraText={"A simple and faster way to search for student accommodation"}
      />
      <CityCards />
      <Compare />
    </div>
  );
}
