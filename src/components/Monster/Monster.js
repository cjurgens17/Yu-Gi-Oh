import React from "react";
import styles from "./Monster.module.css";
import MonsterDialog from "../MonsterDialog";

function Monster({ card }) {
  const cardImg = card.card_images[0].image_url;
  const dragRef = React.useRef(null);

  //handle start of drag
  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/json', JSON.stringify(card));
  }

  return (
    <MonsterDialog
      card={card}
      trigger={
        <img
          ref={dragRef}
          className={styles.cover}
          alt={`Monster ${card.name}`}
          src={cardImg}
          draggable={true}
          onDragStart={handleDragStart}
        />
      }
    />
  );
}

export default Monster;
