import React from "react";

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
          <p>{properties?.rent}</p>
        </div>
        <div className="col key-features">
          <h3>Key Features</h3>
          <ul>{properties?.key_features}</ul>
        </div>
      </div>
    </div>
  );
}
