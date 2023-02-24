import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card/Card";
import "./CityCards.css";

export default function CityCards() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    // get api data here
    axios
      .get("https://unilife-server.herokuapp.com/cities")
      .then((result) => {
        console.log(result.data.response);
        setCities(result.data.response.slice(0, 9));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="city-card-container mt-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2>Student accommodations in our top cities</h2>
        </div>
      </div>
      {cities?.map((city) => (
        <Card city={city} />
      ))}
      <div className="see-all-cities-btn">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="button"
          onClick=""
        >
          See All Cities
        </button>
      </div>
    </div>
  );
}
