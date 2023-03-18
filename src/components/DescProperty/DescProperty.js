import React from "react";

import "./DescProperty.css";
import CheckMark from "../../assets/check-mark.png";

export default function DescProperty({ properties }) {
  const roomPriceKeys = properties?.bedroom_prices
    ? Object.keys(properties?.bedroom_prices)
    : [];
  console.log(roomPriceKeys);
  return (
    <div className="bottom-container">
      <div className="row">
        <div className="col-6 description">
          <h3 className="mb-4">Description</h3>
          <p>{properties?.property_description}</p>
        </div>
        <div className="col-6 room-prices">
          <h3 className="mb-4">Bedroom Prices</h3>
          <ul>
            {roomPriceKeys.map((priceKey, index) => (
              <li>
                {`Bedroom ${index + 1} `}
                {properties?.bedroom_prices[priceKey]}
              </li>
            ))}
          </ul>
        </div>
        <div className="col key-features">
          <h3 className="mb-4">Key Features</h3>
          <ul>
            {properties?.key_features?.map((item) => (
              <li>
                {" "}
                <img src={CheckMark} alt="checkmark" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
