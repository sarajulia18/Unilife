import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

import Overlay from "../components/Overlay/Overlay";
import SeeAllCards from "../components/SeeAllCards/SeeAllCards";

export default function SeeAllCities() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get("https://unilife-server.herokuapp.com/cities?limit=20")
      .then((result) => {
        console.log(result.data.response);
        setCities(result.data.response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="see-all-cities-container">
      <Overlay
        headingText={"Student Accommodation"}
        paraText={
          "UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you"
        }
      />
      <SeeAllCards cities={cities} />
    </div>
  );
}
