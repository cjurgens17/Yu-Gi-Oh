import React from 'react';
import styles from './DeckPrototype.module.css';
import { UserDeckContext } from '../UserDeckContext/UserDeckContext';

function DeckPrototype({background, name}){

    const [droppedCards, setDroppedCards] = React.useState([]);
    const {userDeckData, setUserDeckData} = React.useContext(UserDeckContext);

    function handleDragOver(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    function handleDrop(e){
        e.preventDefault();
        const droppedData = e.dataTransfer.getData("application/json");
        const droppedObject = JSON.parse(droppedData);
        const nextDroppedCards = [...droppedCards, droppedObject];
        setDroppedCards(nextDroppedCards);

        //switch to update userDeckData correctly-- ability to add new features in the future
        switch (name) {
          case 'Main Deck':
            setUserDeckData({...userDeckData, mainDeck: nextDroppedCards});
            break;
          case 'Side Deck':
            setUserDeckData({...userDeckData, sideDeck: nextDroppedCards});
            break;
          case 'Extra Deck':
            setUserDeckData({...userDeckData, extraDeck: nextDroppedCards});
            break;
          default:
            break;
        }
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