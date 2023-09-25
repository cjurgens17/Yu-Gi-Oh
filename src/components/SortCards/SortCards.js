import React from "react";
import { PROPERTIES, DIRECTION } from "../../constants/properties";

function SortCards() {
  const id = React.useId();
  const [property, setProperty] = React.useState("Default");
  const [direction, setDirection] = React.useState("Desc");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //update current card list
      }}
    >
      <label htmlFor={`properties-${id}`}>Sort By</label>
      <select
        id={`properties-${id}`}
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      >
        {PROPERTIES.map((prop, index) => {
          return (
            <option key={index} value={prop}>
              {prop}
            </option>
          );
        })}
      </select>{" "}
      <select
        id={`direction-${id}`}
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
      >
        {DIRECTION.map((direction, index) => {
          return (
            <option key={index} value={direction}>
              {direction}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default SortCards;
