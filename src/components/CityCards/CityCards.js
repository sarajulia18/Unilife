import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CityCards() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    // get api data here
    axios
      .get("https://unilife-server.herokuapp.com/cities")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {cities?.map((city) => {
        <p>city</p>;
      })}
    </div>
  );
}
