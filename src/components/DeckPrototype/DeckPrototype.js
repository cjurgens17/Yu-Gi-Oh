import React from 'react';
import styles from './DeckPrototype.module.css';

function DeckPrototype({background, name, setDeck}){

    const [droppedCards, setDroppedCards] = React.useState([]);

    function handleDragOver(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    function handleDrop(e){
        e.preventDefault();
        const droppedData = e.dataTransfer.getData("application/json");
        const droppedObject = JSON.parse(droppedData);
        setDroppedCards([...droppedCards, droppedObject]);
        setDeck([...droppedCards, droppedObject])
        console.log(droppedCards);
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
  {droppedCards.map((card, index) => (
    <img
      key={index}
      alt="Yugioh card in the main deck"
      src={card.card_images[0].image_url}
      className={styles.droppedItem}
    />
  ))}
  </div>
</section>
    );
}

export default DeckPrototype;