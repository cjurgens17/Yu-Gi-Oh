import React from "react";
import Monster from "../Monster";
import styles from "./Card.module.css";
import MonsterDetails from "../MonsterDetails";


function Card({ card }) {

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Monster card={card}/>
      </div>
      <div className={styles.details}>
        <MonsterDetails card={card} />
      </div>
    </div>
  );
}

export default Card;
