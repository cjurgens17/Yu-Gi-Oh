import React from "react";
import Monster from "../Monster";
import styles from "./Card.module.css";
import MonsterDetails from "../MonsterDetails";
import MonsterDialog from "../MonsterDialog";

function Card({ img, type, name, attribute, desc }) {
  const yuGiOhCardDetails = {img: img, name: name, desc: desc}
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <MonsterDialog yuGiOhCardDetails={yuGiOhCardDetails} trigger={<Monster img={img} name={name} />} />
        {/* <Monster img={img} name={name} /> */}
      </div>
      <div className={styles.details}>
        <MonsterDetails name={name} type={type} attribute={attribute} />
      </div>
    </div>
  );
}

export default Card;
