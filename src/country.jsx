import React from "react";
import "./styles.css";

export const Country = (props) => (
  <div className="country">
    <a
      href={"https://en.wikipedia.org/wiki/" + props.country.name}
      target="_blank"
    >
      <img src={props.country.flag} alt="flag" />
      <h2>{props.country.name}</h2>
      <p>Population {props.country.population}</p>
      <p>Region {props.country.region}</p>
      <p>Capital {props.country.capital}</p>
    </a>
  </div>
);
