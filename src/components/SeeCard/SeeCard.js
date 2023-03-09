import React from "react";
import { Link } from "react-router-dom";

import "./SeeCard.css";

export default function SeeCard({ city }) {
  return (
    <div>
      <Link to={`/citydetails/${city._id}`}>
        <div className="see-all-city-card-container">
          <div className="row m-auto text-center">
            <h5 className="see-card-title">{city.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
