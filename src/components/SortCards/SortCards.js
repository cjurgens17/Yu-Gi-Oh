import React from "react";
import { PROPERTIES, ORDER } from "../../constants/properties";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";
import styles from "./SortCards.module.css";

function SortCards() {
  const [order, setOrder] = React.useState("");
  const [property, setProperty] = React.useState("");
  const { yuGiOhCards, setYuGiOhCards } = React.useContext(YuGiOhCardContext);

  function sortByProperty(property) {
    property = property.toLowerCase();
    let nextYuGiOhCards;

    switch (property) {
      case "name":
        nextYuGiOhCards = [...yuGiOhCards].sort((a, b) =>
          a[`${property}`].localeCompare(b[`${property}`])
        );
        break;
      case "atk":
      case "def":
      case "level":
        nextYuGiOhCards = [...yuGiOhCards].sort(
          (a, b) => a[`${property}`] - b[`${property}`]
        );
        break;
      default:
        break;
    }

    setYuGiOhCards(nextYuGiOhCards);
  }

  return (
      <section className={styles.sortRow}>
      <select
      className="selectInput"
        value={property}
        onChange={(e) => {
          const nextProperty = e.target.value;
          setProperty(nextProperty);
          sortByProperty(nextProperty);
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
      <select
      className="selectInput"
        value={order}
        onChange={(e) => {
          const nextOrder = e.target.value;
          setOrder(nextOrder);
          setYuGiOhCards([...yuGiOhCards].reverse());
        }}
      >
        {ORDER.map((direction, index) => {
          return (
            <option key={index} value={direction}>
              {direction}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default SortCards;
