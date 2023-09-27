import React from "react";
import Card from "../Card";

import styles from "./CardScrollView.module.css";


/*image properties:
    image_url: regular image -- larger size
    image_url_cropped: -- cropped version of the large image
    image_url_small: smaller size
*/

//figure out pagination
function CardScrollView({sortedCards, setSortedCards}) {

  return (
    <div className={styles.container}>
    <ol>
      {sortedCards.map((card, index) => (
        <li key={index}>
          <Card
            img={card.card_images[0].image_url}
            type={card.type}
            name={card.name}
            attribute={card.attribute}
          />
        </li>
      ))}
    </ol>
  </div>
  );
}

export default CardScrollView;
