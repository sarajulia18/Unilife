import React from "react";

export default function Compare() {
  return (
    <div>
      <div className="compare-cards-main-container mt-5 mb-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2>Compare all inclusive student homes.</h2>
          </div>
        </div>
        <div className="top-compare-cards-container text-center mt-5 mb-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Search</h5>
                  <p className="card-text">
                    Find your dream home in the perfect area near your
                    university.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Compare</h5>
                  <p className="card-text">
                    Compare student accommodation to find the right home for
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Bills Included</h5>
                  <p className="card-text">
                    Bills are included in all rent prices. No hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-compare-container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <img src="../components./assets/person.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
