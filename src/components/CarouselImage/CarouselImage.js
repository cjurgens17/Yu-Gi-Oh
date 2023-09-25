import React from 'react';


function CarouselImage({index, data}){

    const imgStyles = {
        width: '100%',
        height: '100%'
    }

    return (
        <div>
            <img className={imgStyles} alt="yugioh card in carousel" src={data.data[index].card_images[0].image_url}/>
        </div>
       
    )
}

export default CarouselImage;