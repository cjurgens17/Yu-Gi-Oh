import React from "react";
import styles from "./DeckPrototype.module.css";
import { Info } from "react-feather";
import { UserDeckContext } from "../UserDeckContext/UserDeckContext";
import VendorDialog from "../VendorDialog";

function DeckPrototype({ background, name }) {
  const { userDeckData, setUserDeckData } = React.useContext(UserDeckContext);

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function handleDrop(e) {
    console.log("drop event",e);
    e.preventDefault();
    const droppedData = e.dataTransfer.getData("application/json");
    const droppedObject = JSON.parse(droppedData);

    const nextDeckCards = [...userDeckData[currentDeck], droppedObject];

    setUserDeckData({
      ...userDeckData,
      [currentDeck]: nextDeckCards,
    });
  }

  const deckStyles = `${styles.mainDeckWrapper} ${styles[background]}`;

  //Find current Deck being changed. Add more decks in the future or change the cases for updates.
  const getCurrentDeck = () => {
    switch (name) {
      case "Main Deck":
        return "mainDeck";
      case "Side Deck":
        return "sideDeck";
      case "Extra Deck":
        return "extraDeck";
      default:
        break;
    }
  };

  const currentDeck = getCurrentDeck();

  return (
    <section
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`${deckStyles} `}
    >
      <h1>{name}</h1>
      <div className={styles.deckGrid}>
        {userDeckData[currentDeck].map((card, index) => (
          <div
            key={index}
            className={styles.droppedItemContainer}
          >
             <img
              key={index}
              alt="Yugioh card"
              src={card.card_images[0].image_url}
              className={styles.droppedItem}
              draggable={true}
              onDragStart={(e) => {
                e.dataTransfer.setData('application/json', JSON.stringify(card));
              }}
            />
            <VendorDialog card={card}>
            <div className={styles.showButtonContainer}>
              <Info className={styles.showButton}/>
            </div>
            </VendorDialog>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeckPrototype;
