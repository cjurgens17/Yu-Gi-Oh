import React from 'react';
import { YuGiOhCardContext } from '../YuGiOhCardsContext/YuGiOhCardsContext';

function CardResults(){

    const {yuGiOhCards} = React.useContext(YuGiOhCardContext);
    const result = yuGiOhCards.length;

    return (
        <p>Result: {result} of {result} cards </p>
    );
}

export default CardResults;