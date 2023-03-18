import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import BookViewing from "../components/BookViewing/BookViewing";

export default function BookViewingModal() {
  const [properties, setProperties] = useState();

  const [searchParams] = useSearchParams();

  return (
    <div>
      <BookViewing properties={properties} address={searchParams} />
    </div>
  );
}
