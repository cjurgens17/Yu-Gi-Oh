import React from "react";
import { PROPERTIES } from "../../constants/properties";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";
import styles from "./SortCards.module.css";

function SortCards({ sortedCards, setSortedCards }) {
  const id = React.useId();
  const [property, setProperty] = React.useState("");
 const { memoizedYuGiOhCards } = React.useContext(YuGiOhCardContext);

  function sortByProperty(property) {
    //possibly use switch for modular and future additions
    let nextSortedCards;

    if (property === "Default") {
      nextSortedCards = [...memoizedYuGiOhCards];
      setSortedCards(nextSortedCards);
      return;
    }

    if (typeof sortedCards[0]?.property === "string") {
      nextSortedCards = [...sortedCards].sort((a, b) =>
        a.property.localeCompare(b.property)
      );
      setSortedCards(nextSortedCards);
      return;
    }

    nextSortedCards = [...sortedCards].sort((a, b) => a.property - b.property);
    setSortedCards(nextSortedCards);
  }

  return (
    <form>
      <label htmlFor={`properties-${id}`} className={styles.sortBy}>
        Sort By
      </label>
      <select
        id={`properties-${id}`}
        value={property}
        onChange={(e) => {
          setProperty(e.target.value);
          sortByProperty(property);
        }}
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
