import React from "react";
import { Link } from "react-router-dom";

import HomeCard from "../HomeCard/HomeCard";
import "./CityHomeCards.css";

export default function CityHomeCards({ cities }) {
  const truncatedCities = cities.slice(0, 9);
  return (
    <div className="home-city-card-container mt-4 text-center">
      <div className="row m-auto mb-5 text-center">
        <div className="city-card-title col-12 col-md-6 col-lg-4">
          <h2>Student accommodations in our top cities</h2>
        </div>
      </div>

      <div className="home-city-cards">
        {truncatedCities?.map((city) => (
          <HomeCard city={city} />
        ))}
      </div>
      <div className="see-all-cities-btn mt-4">
        <Link
          type="button"
          className="btn btn-primary"
          data-bs-toggle="button"
          to="/seeallcities"
        >
          See All Cities
        </Link>
      </div>
    </div>
  );
}
