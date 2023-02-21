import React from "react";
import "./styles.css";

import CityCards from "../components/CityCards/CityCards";
import Overlay from "../components/Overlay/Overlay";

export default function CityDetails() {
  return (
    <div>
      <CityCards />
      <div className="homepage-container">
        <Overlay
          headingText={"Search Accommodation"}
          paraText={
            "Whatever you're after, we can help you find the right student accommodation for you"
          }
        />
      </div>
    </div>
  );
}
