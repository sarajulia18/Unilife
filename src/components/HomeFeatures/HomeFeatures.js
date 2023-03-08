import React from "react";
import "./HomeFeatures.css";

import HandHome from "../../assets/hand&home.png";
import Heart from "../../assets/large-heart.png";
import ManText from "../../assets/person.png";

export default function HomeFeatures() {
  return (
    <div className="container">
      <div className="row m-auto">
        <div className="col-12 col-md-6 left-feature">
          <div className="card">
            <div className="row card-body-one m-auto">
              <div className="col">
                <img src={HandHome} alt="Hand holding a house" />
              </div>
              <div className="col">
                <h5 className="card-title">Best selection</h5>
                <p className="card-text">
                  Best selection of student accommodations. Never been easier to
                  find a home that's right for you.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row card-body-two m-auto">
              <div className="col">
                <img src={Heart} alt="Heart" />
              </div>
              <div className="col">
                <h5 className="card-title">Your Favorite</h5>
                <p className="card-text">
                  Shortlist your favorite properties and send enquiries in one
                  click.
                </p>
              </div>
            </div>
          </div>
          <div className="search-and-compare-btn">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="button"
              onClick=""
            >
              Search & Compare
            </button>
          </div>
        </div>
        <div className="col-6 right-feature">
          <img src={ManText} alt="Man Texting" />
        </div>
      </div>
    </div>
  );
}
