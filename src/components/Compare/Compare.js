import React from "react";
import "./Compare.css";
import Globe from "../../assets/search-globe.png";
import CheckBox from "../../assets/checkbox.png";
import RecieptPaper from "../../assets/bills-paper.png";

export default function Compare() {
  return (
    <div>
      <div className="compare-cards-main-container mt-5 mb-5">
        <div className="row m-auto mb-5">
          <div className="col-12 text-center mt-5">
            <h2>Compare all inclusive student homes.</h2>
          </div>
        </div>
        <div className="compare-cards-container text-center mt-5 mb-5">
          <div className="three-cards row m-auto">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Globe} alt="globe" />
                  <h5 className="card-title mt-4">Search</h5>
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
                  <img src={CheckBox} alt="Check Box" />
                  <h5 className="card-title mt-4">Compare</h5>
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
                  <img src={RecieptPaper} alt="Reciept Paper" />
                  <h5 className="card-title mt-4">Bills Included</h5>
                  <p className="card-text">
                    Bills are included in all rent prices. No hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
