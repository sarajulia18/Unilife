import React from "react";
import axios from "axios";

import InfoProperty from "../components/InfoProperty/InfoProperty";
import DescProperty from "../components/DescProperty/DescProperty";

export default function HomeDetail() {
  return (
    <div className="home-detail-container">
      <InfoProperty />
      <DescProperty />
    </div>
  );
}
