import React from "react";
import Students from "../../assets/students.png";

import "./StudentSection.css";

export default function StudentSection({ cityInfo }) {
  return (
    <div className="student-section-container mt-5 mb-5">
      <div className="row m-auto">
        <div className="col-12 col-md-6 left-section">
          <div className="card">
            <div className="row card-body-one m-auto">
              <div className="col">
                <h5 className="student-section-card-title">
                  Being a student in {cityInfo?.name}
                </h5>
                <p className="card-text">{cityInfo?.student_life}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 right-section">
          <img src={Students} alt="Group of Friends" />
        </div>
      </div>
    </div>
  );
}
