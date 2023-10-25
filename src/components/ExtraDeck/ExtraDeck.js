import React from 'react';
import DeckPrototype from '../DeckPrototype';

function ExtraDeck(){

    const background = 'extraDeck';
    const name = 'Extra Deck'
    const [extraDeck, setDeck] = React.useState([]);
    console.log("Extra Deck", extraDeck);

    return (
            <DeckPrototype background={background} name={name} setDeck={setDeck}/>
    );
}

export default ExtraDeck;