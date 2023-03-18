import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InfoProperty.css";

import Couch from "../../assets/couch-icon.png";
import Bathtub from "../../assets/bathtub-icon.png";
import Heart from "../../assets/small-heart.png";
import Arrow from "../../assets/back-arrow.png";
import CityDetails from "../../pages/CityDetails";

export default function InfoProperty({ properties }) {
  const propertySelection = properties?.images.slice(1, 4);
  const navigate = useNavigate();

  return (
    <div className="top-container mt-5 mb-5">
      <div className="row row-cols-2 pics-and-all-info">
        <div className="row full-left-info">
          <div>
            <img src={Arrow} alt="back arrow" />
            <button className="back-to-search" onClick={() => navigate(-1)}>
              Back to Search
            </button>
          </div>

          <div className="hero-image">
            <img src={properties?.images[0]} alt="main selection" />
          </div>
          <div className="thumbnail-image">
            {propertySelection?.map((imageSrc) => (
              <img src={imageSrc} alt="thumbnails" />
            ))}
          </div>
        </div>
        <div className="row full-right-info">
          <div className="col full-property-address">
            <h2>
              {properties?.address?.street}, <br></br>
              {properties?.address?.city},{properties?.address?.postcode}
            </h2>
          </div>
          <div className="col right-top-info">
            <div className="col each-info">
              <h4 className="right-info-label">Bedrooms </h4>
              <img src={Couch} alt="Couch Icon" />
              {properties?.bedroom_count}
            </div>
            <div className="col each-info">
              <h4 className="right-info-label">Bathrooms</h4>
              <img src={Bathtub} alt="Bathtub Icon" className="icons" />
              {properties?.bathroom_count}
            </div>
            <div className="col each-info">
              <h4 className="right-info-label">Property Type</h4>{" "}
              {properties?.property_type}
            </div>
          </div>
          <div className="col right-bottom-info mt-3 mb-4">
            <div className="col each-info">
              <h4 className="right-info-label">Price</h4> ${properties?.rent}
            </div>
            <div className="col each-info">
              <h4 className="right-info-label">Furnished Type</h4>{" "}
              {properties?.furnished}
            </div>
            <div className="col each-info">
              <h4 className="right-info-label">Available From</h4>{" "}
              {properties?.availability}
            </div>
          </div>
          <div className="row both-btns">
            <button className="col shortlist-btn">
              <img src={Heart} alt="small heart" />
              <h4>Shortlist</h4>
            </button>
            <Link
              to={`/bookviewingmodal?street=${properties?.address.street}&city=${properties?.address.city}&postcode=${properties?.address.postcode}`}
              type="button"
              className="col book-viewing-btn"
            >
              <h4>Book Viewing</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
