import React from "react";
import Monster from "../Monster";
import styles from "./Card.module.css";
import MonsterDetails from "../MonsterDetails";

function Card({ img, type, name, attribute }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Monster img={img} name={name} />
      </div>
      <div className={styles.details}>
        <MonsterDetails name={name} type={type} attribute={attribute} />
      </div>
    </div>
  );
}

export default Card;
