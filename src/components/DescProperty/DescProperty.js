import React from "react";

import "./DescProperty.css";

export default function DescProperty({ properties }) {
  return (
    <div className="bottom-container">
      <div className="row">
        <div className="col description">
          <h3>Description</h3>
          <p>{properties?.property_description}</p>
        </div>
        <div className="col room-prices">
          <h3>BedRoom Prices</h3>
          <ul>
            {properties?.bedroom_prices.map((roomPrices) => (
              <li>{roomPrices}</li>
            ))}
          </ul>
        </div>
        <div className="col key-features">
          <h3>Key Features</h3>
          <ul>
            {properties?.key_features?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
