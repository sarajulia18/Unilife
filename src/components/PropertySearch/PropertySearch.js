import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
  //   let hyperRef = `/homedetail/${_id}`;
  //   if (minBedrooms) {
  //     hyperRef += `/${minBedrooms}`;
  //     navigate(hyperRef);
  //   }

  return (
    <div className="container">
      <div className="search-box">
        <div className="select-container">
          <select
            onChange={changeMinBedrooms}
            className="min-bedroom col-lg-3 text-muted bg-light"
          >
            <option>{bedroomCount}</option>
            {/* {bedroomCount?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))} */}
          </select>
          <select
            onChange={changeMinBathrooms}
            className="min-bathroom col-lg-3 text-muted bg-light"
          >
            <option>{bathroomCount}</option>
            {}
          </select>
          <select
            onChange={changeMaxPrice}
            className="maxPrice col-lg-3 text-muted bg-light"
          >
            <option>{bedroomPrices}</option>
            {/* {cities?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))} */}
          </select>
          <select
            onChange={changeHomeType}
            className="min-bedroom col-lg-3 text-muted bg-light"
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
