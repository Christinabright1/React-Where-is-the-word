import React from "react";
import "./styles.css";
import { Country } from "./country";
export const CountryList = (props) => {
  return (
    <div className="cardList">
      {props.countries.map((country, idx) => (
        <Country key={idx} country={country} />
      ))}
    </div>
  );
};
