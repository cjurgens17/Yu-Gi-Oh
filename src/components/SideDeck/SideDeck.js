import React from 'react';
import MainDeck from '../MainDeck';
function SideDeck(){
    
    //these are passed to deck, css classes are defined in MainDeck
    const background = 'sideDeck';
    const name = 'Side Deck'

    return (
        <MainDeck background={background} name={name}/>
    );
}

export default SideDeck;