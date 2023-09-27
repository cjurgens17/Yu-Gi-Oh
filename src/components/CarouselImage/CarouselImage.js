import React from 'react';
import {YuGiOhCardContext}  from '../YuGiOhCardsContext/YuGiOhCardsContext';


function CarouselImage({index}){

    const {memoizedYuGiOhCards} = React.useContext(YuGiOhCardContext)
    console.log("carousel image", memoizedYuGiOhCards);
    const[currImage, setCurrImage] = React.useState('');

    const imgStyles = {
        width: '100%',
        height: '100%'
    }

    React.useEffect(() => {
        setCurrImage(memoizedYuGiOhCards[index]?.card_images[0]?.image_url)
    },[index, memoizedYuGiOhCards])

    console.log(memoizedYuGiOhCards[index]?.card_images[0]?.image_url);

    return (
        <div>
            <img className={imgStyles} alt="yugioh card in carousel" src={currImage}/>
        </div>
       
    );
}

export default CarouselImage;