import React from "react";
import { UserDeckContext } from "../UserDeckContext/UserDeckContext";

function Export() {
  const { userDeckData } = React.useContext(UserDeckContext);

  const exportDeck = () => {
    const jsonUserDeck = JSON.stringify(userDeckData);
    const blob = new Blob([jsonUserDeck], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `${userDeckData.deckName}`;
    a.click();
    URL.revokeObjectURL(a.url);
  };

  return (
    <section>
      <button className="primaryButton"
        onClick={() => {
          exportDeck();
        }}
      >
        Export
      </button>
    </section>
  );
}

export default Export;
