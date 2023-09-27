import React from 'react';
import { YuGiOhCardContext } from '../YuGiOhCardsContext/YuGiOhCardsContext';

function CardResults(){

    const {memoizedYuGiOhCards} = React.useContext(YuGiOhCardContext);
    const result = memoizedYuGiOhCards.length;

    return (
        <p>Result: {result} of {result} cards </p>
    );
}

export default CardResults;