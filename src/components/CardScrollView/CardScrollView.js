import React from "react";
import Card from "../Card";

import styles from "./CardScrollView.module.css";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";

/*image properties:
    image_url: regular image -- larger size
    image_url_cropped: -- cropped version of the large image
    image_url_small: smaller size
*/
function CardScrollView({ showFiltered, filteredCards }) {

  const { yuGiOhCards } = React.useContext(YuGiOhCardContext);
  const [numOfCardsToShow, setNumOfCardsToShow] = React.useState(5);
  const cardContainerRef = React.useRef(null);
  let cardsToShow = showFiltered ? filteredCards : yuGiOhCards;
  const incrementCardsToShow = 5;

  React.useEffect(() => {

    const loadMoreCards = () => {
      setNumOfCardsToShow((prevNumOfCardsToShow)=> {
          return prevNumOfCardsToShow + incrementCardsToShow;
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleInfiniteScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry);
            loadMoreCards();
          
        }
      });
    };

    const observer = new IntersectionObserver(handleInfiniteScroll, options);
    if(cardContainerRef.current){
      observer.observe(cardContainerRef.current);
    }
    

    return () => {
      observer.disconnect();
    };
  }, [numOfCardsToShow]);

  return (
    <div className={styles.container}>
       <ol>
      {cardsToShow
        .slice(0, numOfCardsToShow)
        .map((card, index) => (
          index % 5 !== 0 ? (
            <li key={index}>
              <Card card={card} />
            </li>
          ) : <li key={index} ref={cardContainerRef}>
            <Card card={card}/>
          </li>
        ))}
    </ol>
    </div>
  );
}

export default CardScrollView;
