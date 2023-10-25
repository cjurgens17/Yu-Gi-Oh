import React from 'react';
import DeckPrototype from '../DeckPrototype';
function SideDeck(){
    
    //these are passed to deck, css classes are defined in MainDeck
    const background = 'sideDeck';
    const name = 'Side Deck';
    const [sideDeck, setDeck] = React.useState([]);
    console.log("side deck",sideDeck);

    return (
        <DeckPrototype background={background} name={name} setDeck={setDeck}/>
    );
}

export default SideDeck;