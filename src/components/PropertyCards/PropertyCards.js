import React from "react";

import PropertyDetailsCard from "../PropertyDetailsCard/PropertyDetailsCard";
import "./PropertyCards.css";

export default function PropertyCards({ properties }) {
  const truncatedCities = properties.slice(0, 9);
  return (
    <div className="property-card-container mt-5 text-center">
      <div className="row m-auto mb-5 text-center">
        <div className="property-card-title col-12 col-md-6 col-lg-4">
          <h2>
            {} home in {}
          </h2>
        </div>
      </div>
      <div className="property-cards">
        {truncatedCities?.map((properties) => (
          <PropertyDetailsCard properties={properties} />
        ))}
      </div>
      <div className="see-all-cities-btn mt-4">
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
