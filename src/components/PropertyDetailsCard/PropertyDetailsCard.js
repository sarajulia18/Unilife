import React from "react";
import { Link } from "react-router-dom";

import "./PropertyDetailsCard.css";

export default function PropertyDetailsCard({ properties }) {
  const imgStyle = {
    backgroundImage: `url(${properties.images[0]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPostion: "center",
    width: 400,
    height: 300,
    objectFit: "cover",
  };
  return (
    <Link to={`/homedetail/${properties._id}`}>
      <div className="card-container" style={imgStyle}>
        <div className="card-img-overlay text-center">
          <h5 className="card-title">{properties.name}</h5>
          <p className="card-text">{properties.property_count} properties</p>
        </div>
      </div>
    </Link>
  );
}
