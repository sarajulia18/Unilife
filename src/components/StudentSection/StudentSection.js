import React from "react";
import Students from "../../assets/students.png";

export default function StudentSection({ cityInfo }) {
  return (
    <div className="container mt-5">
      <div className="row m-auto">
        <div className="col-12 col-md-6 left-feature">
          <div className="card">
            <div className="row card-body-one m-auto">
              <div className="col">
                <h5 className="card-title">
                  Being a student in {cityInfo?.name}
                </h5>
                <p className="card-text">{cityInfo?.student_life}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 right-feature">
          <img src={Students} alt="Group of Friends" />
        </div>
      </div>
    </div>
  );
}
