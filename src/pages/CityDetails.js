import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

import Overlay from "../components/Overlay/Overlay";
import PropertySearch from "../components/PropertySearch/PropertySearch";
import PropertyCards from "../components/PropertyCards/PropertyCards";
import StudentSection from "../components/StudentSection/StudentSection";

export default function CityDetails() {
  const [properties, setProperties] = useState([]);
  const [city, setCity] = useState();
  const { cityid, bedrooms } = useParams();
  const query = { query: { city_id: cityid, bedroom_count: bedrooms } };
  useEffect(() => {
    axios
      .post(`https://unilife-server.herokuapp.com/properties/filter`, query)
      .then((res) => {
        setProperties(res.data.response);
      })
      .catch((err) => console.log(err));
    axios
      .get(`https://unilife-server.herokuapp.com/cities/${cityid}`)
      .then((res) => {
        setCity(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="citydetails-container">
        <Overlay
          headingText={"Search Accommodation"}
          paraText={
            "Whatever you're after, we can help you find the right student accommodation for you"
          }
        />
        <PropertySearch />
        <PropertyCards properties={properties} />
        <StudentSection cityInfo={city} />
      </div>
    </div>
  );
}
