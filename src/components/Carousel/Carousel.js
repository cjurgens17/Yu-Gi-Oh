import React from 'react';
import Button from '../Button';
import CarouselImage from '../CarouselImage';
import { YuGiOhCardContext } from '../YuGiOhCardsContext/YuGiOhCardsContext';


function Carousel(){
    const[index, setIndex] = React.useState(0);
    const {memoizedYuGiOhCards} = React.useContext(YuGiOhCardContext)
    
    function showLeft(){
        if(index === 0){
            setIndex(memoizedYuGiOhCards.length - 1);
            return;
        }
        
        setIndex(index - 1);
}

function showRight(){
    if(index === memoizedYuGiOhCards.length - 1){
        setIndex(0);
        return;
    }

    setIndex(index + 1);
}


    const divStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      };

    return( 
    <div
    style={divStyle}
    >
        <Button
        onClick={showLeft}
        >Left</Button>

        <CarouselImage index={index}></CarouselImage>

        <Button
        onClick={showRight}
        >Right</Button>

    </div>
    )
}

export default Carousel;