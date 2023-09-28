import React from "react";
import Button from "../Button";
import CarouselImage from "../CarouselImage";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";

import styles from "./Carousel.module.css";

function Carousel() {
  const [index, setIndex] = React.useState(0);
  const { yuGiOhCards } = React.useContext(YuGiOhCardContext);

  function showLeft() {
    if (index === 0) {
      setIndex(yuGiOhCards.length - 1);
      return;
    }

    setIndex(index - 1);
  }

  function showRight() {
    if (index === yuGiOhCards.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  }

  return (
    <div className={styles.carousel}>
      <Button onClick={showLeft}>Left</Button>

      <CarouselImage index={index}></CarouselImage>

      <Button onClick={showRight}>Right</Button>
    </div>
  );
}

export default Carousel;
