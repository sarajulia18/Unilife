import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookViewing from "../components/BookViewing/BookViewing";

export default function BookViewingModal() {
  const [properties, setProperties] = useState();
  // const { address } = useParams();
  // useEffect(() => {
  //   axios
  //     .post(`https://unilife-server.herokuapp.com/properties/${address}`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       // setProperties(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      <BookViewing properties={properties} />
    </div>
  );
}
