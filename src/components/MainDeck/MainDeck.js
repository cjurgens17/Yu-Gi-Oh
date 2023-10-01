import React from 'react';
import styles from './MainDeck.module.css';

function MainDeck(){

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
   

    return (
<section
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  className={styles.mainDeckWrapper}
>
  <h1>Main Deck</h1>
  <div className={styles.deckGrid}>
  {droppedCards.map((img, index) => (
    <img
      key={index}
      alt="Yugioh card in the main deck"
      src={img}
    />
  ))}
  </div>
</section>
    );
}

export default MainDeck;