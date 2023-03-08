import React from "react";
import { Link } from "react-router-dom";

import "./PropertyDetailsCard.css";
import Couch from "../../assets/couch-icon.png";
import Bathtub from "../../assets/bathtub-icon.png";
import Pin from "../../assets/address-icon.png";
import ViewHome from "../../assets/home-icon.png";

export default function PropertyDetailsCard({ properties }) {
  const imgStyle = {
    backgroundImage: `url(${properties.images[0]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPostion: "center",
    width: 400,
    height: 500,
    objectFit: "cover",
    borderRadius: 15,
    margin: 15,
  };
  return (
    <Link to={`/homedetail/${properties._id}`}>
      <div className="property-card-container mb-5" style={imgStyle}>
        <div className="property-card-box">
          <div className="blue-banner">
            <h5>$ {properties.rent}</h5>
            <p>{}</p>
            <img src={Couch} alt="Couch Icon" />
            <p>{properties.bedroom_count}</p>
            <img src={Bathtub} alt="Bathtub Icon" />
            <p>{properties.bathroom_count}</p>
          </div>
          <div className="info-banner">
            <h4>{}</h4>
            <h4>{properties.furnished}</h4>
            <img src={Pin} alt="Address Pin" />
            {/* <p>{properties.address}</p> */}
          </div>
          <div className="view-banner">
            <img src={ViewHome} alt="Home Icon" />
            <h3>View Home</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
