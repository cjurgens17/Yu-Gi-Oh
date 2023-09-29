import React from 'react';
import { YuGiOhCardContext } from '../YuGiOhCardsContext/YuGiOhCardsContext';

function CardResults({showFiltered, filteredCards}){

    const {yuGiOhCards} = React.useContext(YuGiOhCardContext);
    const result = showFiltered ? filteredCards.length : yuGiOhCards.length;

    return (
      <p>Result: {result} of {result} cards </p>
    );
}

export default CardResults;