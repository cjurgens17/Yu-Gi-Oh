import React from "react";
import { UserDeckContext } from "../UserDeckContext/UserDeckContext";

function Reset() {
  const { setUserDeckData } = React.useContext(UserDeckContext);

  const userDeckModel = {
    deckName: "YuGiOh Deck",
    mainDeck: [],
    sideDeck: [],
    extraDeck: [],
  };

  const resetDeck = () => {
    setUserDeckData(userDeckModel);
  };

  return (
    <section>
      <button className="primaryButton" onClick={resetDeck}>Reset</button>
    </section>
  );
}

export default Reset;
