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
    backgroundSize: "contain",
    backgroundPostion: "center",
    width: 400,
    height: 400,
    borderRadius: 15,
    margin: 15,
  };
  return (
    <Link to={`/homedetail/${properties._id}`}>
      <div className="property-card-container mb-5">
        <div className="property-card-box" style={imgStyle}>
          <div className="blue-banner">
            <div className="property-rent">
              <h5>$ {properties.rent}</h5>
              <p>{}</p>
            </div>
            <div className="room-count">
              <img src={Couch} alt="Couch Icon" className="icons" />
              <p>{properties?.bedroom_count}</p>
              <img src={Bathtub} alt="Bathtub Icon" className="icons" />
              <p>{properties?.bathroom_count}</p>
            </div>
          </div>
          <div className="info-banner">
            <div className="top-info">
              <h4>{properties?.property_type}</h4>
              <h4>{properties?.furnished}</h4>
            </div>
            <div className="bottom-info">
              <img src={Pin} alt="Address Pin" className="icons" />
              <p>
                {properties?.address?.street}
                {properties?.address?.city}
                {properties?.address?.postcode}
              </p>
            </div>
          </div>
          <div className="view-banner">
            <img src={ViewHome} alt="Home Icon" className="icons" />
            <h3>View Home</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
