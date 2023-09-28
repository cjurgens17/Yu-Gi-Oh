import React from "react";
import Card from "../Card";

import styles from "./CardScrollView.module.css";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";


/*image properties:
    image_url: regular image -- larger size
    image_url_cropped: -- cropped version of the large image
    image_url_small: smaller size
*/
function CardScrollView() {
const {yuGiOhCards} = React.useContext(YuGiOhCardContext);

  return (
    <div className={styles.container}>
    <ol>
      {yuGiOhCards.map((card, index) => (
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
