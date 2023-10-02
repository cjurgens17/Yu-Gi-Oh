import React from 'react';
import styles from './MainDeck.module.css';

function MainDeck({background = 'mainDeck', name = 'Main Deck'}){

    const [droppedCards, setDroppedCards] = React.useState([]);

    function handleDragOver(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    function handleDrop(e){
        e.preventDefault();
        const image = e.dataTransfer.getData("text/plain");
        setDroppedCards([...droppedCards, image]);
    }

    const deckStyles = `${styles.mainDeckWrapper} ${styles[background]}`;
   

    return (
<section
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  className={deckStyles}
>
  <h1>{name}</h1>
  <div className={styles.deckGrid}>
  {droppedCards.map((img, index) => (
    <img
      key={index}
      alt="Yugioh card in the main deck"
      src={img}
      className={styles.droppedItem}
    />
  ))}
  </div>
</section>
    );
}

export default MainDeck;