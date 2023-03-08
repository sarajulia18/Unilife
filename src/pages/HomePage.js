import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Overlay from "../components/Overlay/Overlay";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import CityHomeCards from "../components/CityHomeCards/CityHomeCards";
import Compare from "../components/Compare/Compare";
import HomeFeatures from "../components/HomeFeatures/HomeFeatures";

export default function HomePage() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    // get api data here
    axios
      .get("https://unilife-server.herokuapp.com/cities?limit=20")
      .then((result) => {
        console.log(result.data.response);
        setCities(result.data.response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="homepage-container">
      <Overlay
        headingText={"Find student homes with bills included"}
        paraText={"A simple and faster way to search for student accommodation"}
      />
      <HomeSearch
        cities={cities}
        cityInput={"Search by city"}
        numRoomInput={"Any bedroom"}
      />
      <CityHomeCards cities={cities} />
      <Compare />
      <HomeFeatures />
    </div>
  );
}
