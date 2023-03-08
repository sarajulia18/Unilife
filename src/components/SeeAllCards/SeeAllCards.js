import React from "react";

import "./SeeAllCards.css";
import SeeCard from "../SeeCard/SeeCard";

export default function SearchCityHomeCards({ cities }) {
  return (
    <div className="see-all-city-container mt-5">
      <div className="row m-auto mb-5 text-center">
        <div className="see-all-city-card-title col-12">
          <h2>Search by City</h2>
        </div>
      </div>

      <div className="see-all-city-cards">
        {cities?.map((city) => (
          <SeeCard city={city} />
        ))}
      </div>

      {/* <Link to={`/citydetails/${city._id}`}>
          <div className="see-all-city-card-container">
            <div className="row m-auto text-center">
              <h5 className="card-title col-12">{city.name}</h5>
            </div>
          </div>
        </Link> */}
    </div>
  );
}
