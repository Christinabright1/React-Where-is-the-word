import React from "react";
import { Country } from "./country";
export const Countries = (props) => {
  return (
    <div className="cardList">
      {props.countries.map((country, idx) => (
        <Country key={idx} country={country} />
      ))}
    </div>
  );
};
