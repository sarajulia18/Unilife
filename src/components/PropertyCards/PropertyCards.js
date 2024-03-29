import React from "react";

import PropertyDetailsCard from "../PropertyDetailsCard/PropertyDetailsCard";
import "./PropertyCards.css";

export default function PropertyCards({ properties, cityInfo }) {
  const truncatedCities = properties.slice(0, 9);
  return (
    <div className="property-cards-container text-center">
      <div className="row m-auto mb-4 text-center property-card-title">
        <div className="col-12 col-md-6 col-lg-4">
          <h2>
            {cityInfo?.property_count} homes in {cityInfo?.name}
          </h2>
        </div>
      </div>
      <div className="property-cards">
        {truncatedCities?.map((properties) => (
          <PropertyDetailsCard properties={properties} />
        ))}
      </div>
    </div>
  );
}
