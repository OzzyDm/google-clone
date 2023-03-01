"use client";

import { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("Canada");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
}

export default CountryLookup;
