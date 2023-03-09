import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSearch.css";

export default function HomeSearch({ cities, cityInput, numRoomInput, e }) {
  const [cityId, setCityId] = useState();
  const [numBedrooms, setNumBedrooms] = useState();
  const navigate = useNavigate();
  const changeCity = (e) => {
    setCityId(e.target.value);
  };
  const changeRoom = (e) => {
    setNumBedrooms(e.target.value);
  };
  const searchHomes = (e) => {
    if (!cityId) {
      alert("please enter city");
      return;
    }
    let hyperRef = `/citydetails/${cityId}`;
    if (numBedrooms) {
      hyperRef += `/${numBedrooms}`;
    }
    navigate(hyperRef);
  };
  return (
    <div className="home-search-container">
      <div className="home-search-box">
        <div className="home-select-container">
          <select
            onChange={changeCity}
            className="search-city col-lg-4 text-muted bg-light"
          >
            <option>{cityInput}</option>
            {cities?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
          <select
            onChange={changeRoom}
            className="num-bedroom col-lg-4 text-muted bg-light"
          >
            <option>{numRoomInput}</option>
            {}
          </select>
          <button
            type="button"
            className="home-search-btn"
            data-bs-toggle="button"
            onClick={searchHomes}
          >
            Find Homes
          </button>
        </div>
      </div>
    </div>
  );
}
