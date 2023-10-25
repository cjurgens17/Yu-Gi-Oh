import React from 'react';
import DeckPrototype from '../DeckPrototype';

function MainDeck(){

    const background = 'mainDeck';
    const name = 'Main Deck';

    return (
        <DeckPrototype background={background} name={name}/>
    );
}

export default MainDeck;