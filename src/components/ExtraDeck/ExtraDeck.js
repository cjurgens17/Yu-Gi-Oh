import React from 'react';
import MainDeck from '../MainDeck';

function ExtraDeck(){

    const background = 'extraDeck';
    const name = 'Extra Deck'

    return (
            <MainDeck background={background} name={name}/>
    );
}

export default ExtraDeck;