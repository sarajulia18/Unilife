import React from "react";
import { Link } from "react-router-dom";

export default function SearchCityHomeCards({ cities }) {
  return (
    <div>
      <div className="see-all-city-container">
        <div className="row m-auto text-center">
          <div className="see-all-city-card-title col-12">
            <h2>Search by City</h2>
          </div>
        </div>
      </div>
      <div className="see-all-city-cards">
        {cities.map((city) => (
          <Link to={`/citydetails/${city._id}`}>
            <div className="see-all-city-card-container">
              <div className="row m-auto text-center">
                <h5 className="card-title col-12">{city.name}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
