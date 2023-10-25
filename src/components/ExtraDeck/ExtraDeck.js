import React from 'react';
import DeckPrototype from '../DeckPrototype';

function ExtraDeck(){
    const background = 'extraDeck';
    const name = 'Extra Deck'

    return (
            <DeckPrototype background={background} name={name}/>
    );
}

export default ExtraDeck;