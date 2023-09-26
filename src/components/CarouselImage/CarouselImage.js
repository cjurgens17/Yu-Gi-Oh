import React from 'react';
import {YuGiOhCardContext}  from '../YuGiOhCardsContext/YuGiOhCardsContext';


function CarouselImage({index}){

    const yuGiOhCards = React.useContext(YuGiOhCardContext)
    console.log("carousel image", yuGiOhCards)
    const[currImage, setCurrImage] = React.useState('');

    const imgStyles = {
        width: '100%',
        height: '100%'
    }

    React.useEffect(() => {
        setCurrImage(yuGiOhCards.memoizedYuGiOhCards[index]?.card_images[0]?.image_url)
    },[index, yuGiOhCards])

    console.log(yuGiOhCards.memoizedYuGiOhCards[index]?.card_images[0]?.image_url);

    return (
        <div>
            <img className={imgStyles} alt="yugioh card in carousel" src={currImage}/>
        </div>
       
    )
}

export default CarouselImage;