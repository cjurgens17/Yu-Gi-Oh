import React from 'react';
import {YuGiOhCardContext}  from '../YuGiOhCardsContext/YuGiOhCardsContext';



function CarouselImage({index}){

    const {yuGiOhCards} = React.useContext(YuGiOhCardContext)
    const[currImage, setCurrImage] = React.useState('');

    React.useEffect(() => {
        setCurrImage(yuGiOhCards[index]?.card_images[0]?.image_url)
    },[index, yuGiOhCards])
  
    return (
        <div>
            <img alt="yugioh card in carousel" src={currImage}/>
        </div>
       
    );
}

export default CarouselImage;