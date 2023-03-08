import React from "react";

export default function InfoProperty({ properties }) {
  const propertyImgArray = properties;
  return (
    <div className="top-container">
      <div className="row">
        {/* <div className="col">
          {propertyImgArray?.map((properties) => (
            <InfoProperty properties={properties?.images} />
          ))}
          <img src={properties?.images} alt="property rooms" />
        </div> */}
        <div className="col">
          <h2>{properties?.address?.street}</h2>
        </div>
      </div>
    </div>
  );
}
