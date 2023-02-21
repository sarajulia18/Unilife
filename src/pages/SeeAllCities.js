import React from "react";
import "./styles.css";

import Overlay from "../components/Overlay/Overlay";

export default function SeeAllCities() {
  return (
    <div className="see-all-cities-container">
      <Overlay
        headingText={"Student Accommodation"}
        paraText={
          "UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you"
        }
      />
    </div>
  );
}
