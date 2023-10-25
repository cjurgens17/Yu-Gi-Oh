import React from 'react';
import DeckPrototype from '../DeckPrototype';

function MainDeck(){

    const background = 'mainDeck';
    const name = 'Main Deck';
    const [mainDeck, setDeck] = React.useState([]);
    console.log("Main Deck", mainDeck);
    return (
        <DeckPrototype background={background} name={name} setDeck={setDeck}/>
    );
}

export default MainDeck;