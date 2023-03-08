import React, { useState } from "react";
import "./PropertySearch.css";

export default function PropertySearch({
  bedroomCount,
  bathroomCount,
  bedroomPrices,
  propertyType,
}) {
  const [minBedrooms, setMinBedrooms] = useState();
  const [minBathrooms, setMinBathrooms] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [HomeType, setHomeType] = useState();
  const changeMinBedrooms = (e) => {
    setMinBedrooms(e.target.value);
  };
  const changeMinBathrooms = (e) => {
    setMinBathrooms(e.target.value);
  };
  const changeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };
  const changeHomeType = (e) => {
    setHomeType(e.target.value);
  };
  return (
    <div className="property-search-container">
      <div className="row m-auto property-search-box">
        <div className="col-3 select-container bedroom">
          <label for="min-bedroom">Min Bedroom</label>
          <select
            onChange={changeMinBedrooms}
            className="col-2 m-auto min-bedroom text-muted bg-light"
          >
            <option>{bedroomCount}</option>
            {/* {bedroomCount?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))} */}
          </select>
        </div>
        <div className="col-2 m-auto select-container bathroom">
          <label for="min-bathroom">Min Bathroom</label>
          <select
            onChange={changeMinBathrooms}
            className="min-bathroom text-muted bg-light"
          >
            <option>{bathroomCount}</option>
            {}
          </select>
        </div>
        <div className="col-2 m-auto select-container max-price">
          <label for="max-price">Max Price</label>
          <select
            onChange={changeMaxPrice}
            className="max-price text-muted bg-light"
          >
            <option>{bedroomPrices}</option>
            {/* {cities?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))} */}
          </select>
        </div>
        <div className="col-2 m-auto select-container home-type">
          <label for="home-type">Home Type</label>
          <select
            onChange={changeHomeType}
            className="home-type text-muted bg-light"
          >
            <option>{propertyType}</option>
            {/* {cities?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))} */}
          </select>
        </div>
      </div>
    </div>
  );
}
