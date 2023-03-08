import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import InfoProperty from "../components/InfoProperty/InfoProperty";
import DescProperty from "../components/DescProperty/DescProperty";

export default function HomeDetail() {
  const [properties, setProperties] = useState([]);
  const { propertyId } = useParams();
  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then((result) => {
        console.log(result.data);
        setProperties(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home-detail-container">
      <InfoProperty properties={properties} />
      <DescProperty properties={properties} />
    </div>
  );
}
