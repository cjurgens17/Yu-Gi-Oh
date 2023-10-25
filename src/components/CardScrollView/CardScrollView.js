import React from "react";
import Card from "../Card";

import styles from "./CardScrollView.module.css";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";


/*image properties:
    image_url: regular image -- larger size
    image_url_cropped: -- cropped version of the large image
    image_url_small: smaller size
*/
function CardScrollView({showFiltered, filteredCards}) {
const {yuGiOhCards} = React.useContext(YuGiOhCardContext);
const[numOfCardsToShow, setNumOfCardsToShow] = React.useState(5);
const cardContainerRef = React.useRef(null);
let cardsToShow = showFiltered ? filteredCards : yuGiOhCards;
const incrementCardsToShow = 5;

React.useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  const handleInfiniteScroll = (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const nextNumOfCardsToShow = numOfCardsToShow + incrementCardsToShow;
        setNumOfCardsToShow(nextNumOfCardsToShow);
      }
    })
  }

  const observer = new IntersectionObserver(handleInfiniteScroll,options);

  if(cardContainerRef.current){
    observer.observe(cardContainerRef.current);
  }

  return () => {
    observer.disconnect();
  }
}, [numOfCardsToShow]);

  return (
    <div className={styles.container}>
    <ol ref={cardContainerRef}>
     {cardsToShow
      .slice(0,numOfCardsToShow)
      .map((card,index) => (
        <li key={index}>
          <Card card={card} />
        </li>
      ))}
    </ol>
  </div>
  );
}

export default CardScrollView;
