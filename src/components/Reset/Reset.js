import React from "react";
import { UserDeckContext } from "../UserDeckContext/UserDeckContext";

function Reset() {
  const { setUserDeckData } = React.useContext(UserDeckContext);

  const userDeckModel = {
    deckName: "",
    mainDeck: [],
    sideDeck: [],
    extraDeck: [],
  };

  const resetDeck = () => {
    setUserDeckData(userDeckModel);
  };

  return (
    <section>
      <button onClick={resetDeck}>Reset Deck</button>
    </section>
  );
}

export default Reset;
