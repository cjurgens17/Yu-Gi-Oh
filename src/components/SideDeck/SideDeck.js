import React from 'react';
import DeckPrototype from '../DeckPrototype';

function SideDeck(){
    
    const background = 'sideDeck';
    const name = 'Side Deck';

    return (
        <DeckPrototype background={background} name={name}/>
    );
}

export default SideDeck;