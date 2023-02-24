import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ city }) {
  return (
    <div className="container">
      {" "}
      <div className="row m-auto">
        {" "}
        <div className="col-12 col-md-4 col-lg-4">
          {" "}
          <div class="card">
            {" "}
            <Link to={`/cities/${city._id}`}>
              <img src={city.image_url} class="card-img" alt="..." />{" "}
              <div className="card-img-overlay text-center">
                <h5 class="card-title">{city.name}</h5>{" "}
                <p class="card-text">{city.property_count} properties</p>{" "}
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
