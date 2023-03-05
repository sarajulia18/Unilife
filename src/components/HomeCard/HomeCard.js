import React from "react";
import { Link } from "react-router-dom";

import "./HomeCard.css";

export default function Card({ city }) {
  console.log(city);
  const imgStyle = {
    backgroundImage: `url(${city.image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPostion: "center",
    width: 400,
    height: 300,
    objectFit: "cover",
  };
  return (
    <Link to={`/citydetails/${city._id}`}>
      <div className="card-container" style={imgStyle}>
        <div className="card-img-overlay text-center">
          <h5 className="card-title">{city.name}</h5>
          <p className="card-text">{city.property_count} properties</p>
        </div>
      </div>
    </Link>
  );
}
