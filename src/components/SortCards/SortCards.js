import React from "react";
import { PROPERTIES } from "../../constants/properties";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";

function SortCards() {
  const id = React.useId();
  const [property, setProperty] = React.useState("");
  const yuGiOhCards = React.useContext(YuGiOhCardContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //update current card list
         //Can add more filters in the future here.
    const filters = [
      {key: 'property', value: property},
    ];

    filters.forEach((filter) => {
      if(filter.value !== ""){
       yuGiOhCards.filter((item) => item[filter.key] === filter.value)
      }
      });

      yuGiOhCards.setYuGiOhCards(yuGiOhCards);

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
      </select>
    </form>
  );
}

export default SortCards;
