import React, { useState } from "react";
import "./PropertySearch.css";

export default function PropertySearch({
  bedroomCount,
  bathroomCount,
  propertyPrice,
  propertyType,
  properties,
  changeProperties,
}) {
  const bedroomNums = [1, 2, 3, 4, 5, 6, 7, 8];
  const bathroomNums = [1, 2, 3, 4, 5, 6];
  const filteredPrice = [
    400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 3000,
  ];
  const type = ["Apartment", "Semi-Detached", "Detached"];

  const changeMinBedrooms = (e) => {
    const minBeds = e.target.value;
    const filteredProperties = properties?.filter(
      (property) => property?.bedroom_count >= minBeds
    );
    changeProperties(filteredProperties);
  };
  const changeMinBathrooms = (e) => {
    const minBaths = e.target.value;

    const filteredProperties = properties?.filter(
      (property) => property?.bathroom_count >= minBaths
    );
    changeProperties(filteredProperties);
  };
  const changeMaxPrice = (e) => {
    const maxPrice = e.target.value;
    const filteredProperties = properties?.filter(
      (property) => property?.rent >= maxPrice
    );
    changeProperties(filteredProperties);
  };
  const changeHomeType = (e) => {
    const homeType = e.target.value;
    const filteredProperties = properties?.filter(
      (property) => property?.property_type >= homeType
    );
    changeProperties(filteredProperties);
  };
  const resetFilteredProperties = (e) => {
    const reset = e.target.value;
    const allProperties = properties?.filter((property) => property >= reset);
    changeProperties(allProperties);
  };

  return (
    <div className="property-search-container">
      <div className="row m-auto property-search-box">
        <div className="col-3 select-container bedroom">
          <label for="min-bedroom">Min Bedroom</label>
          <select
            onChange={changeMinBedrooms}
            className="col-2 min-bedroom text-muted bg-light"
          >
            <option>{bedroomCount}</option>
            {bedroomNums?.map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>
        </div>
        <div className="col-2 select-container bathroom">
          <label for="min-bathroom">Min Bathroom</label>
          <select
            onChange={changeMinBathrooms}
            className="min-bathroom text-muted bg-light"
          >
            <option>{bathroomCount}</option>
            {bathroomNums?.map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>
        </div>
        <div className="col-2 select-container max-price">
          <label for="max-price">Max Price</label>
          <select
            onChange={changeMaxPrice}
            className="max-price text-muted bg-light"
          >
            <option>{propertyPrice}</option>
            {filteredPrice?.map((number) => (
              <option value={number}>{number}</option>
            ))}
          </select>
        </div>
        <div className="col-2 select-container home-type">
          <label for="home-type">Home Type</label>
          <select
            onChange={changeHomeType}
            className="home-type text-muted bg-light"
          >
            <option>{propertyType}</option>
            {type?.map((property_type) => (
              <option value={property_type}>{property_type}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="property-search-btn"
          onClick={resetFilteredProperties}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
