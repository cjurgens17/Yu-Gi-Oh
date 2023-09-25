import React from 'react';
import useSWR from 'swr';
import Button from '../Button';


const ENDPOINT = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Exodia'
async function fetchCarouselImages(ENDPOINT){


    const resp = await fetch(ENDPOINT);

    if(!resp.ok){
        throw resp
    }

    const data = await resp.json();

    return data;
}

function Carousel(){
    const[index, setIndex] = React.useState(0);
    const {data, isLoading, error} = useSWR(ENDPOINT, fetchCarouselImages);
    const carousel = React.useRef();

    function showLeft(){
            if(index === 0){
                setIndex(data.data.length - 1);
                return;
            }
            
            setIndex(index - 1);
    }

    function showRight(){
        if(index === data.data.length - 1){
            setIndex(0);
            return;
        }

        setIndex(index + 1);
    }


    const divStyle = {
        backgroundImage: `url(${data.data[index].card_images[0].image_url})`,
        backgroundSize: 'cover', // You can adjust the background size as needed
        backgroundRepeat: 'no-repeat', // You can adjust the repeat behavior
        // Add other background-related styles as needed
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      };

      if(isLoading) return <h1>Loading</h1>
      if(error) return <h1>Oops Something Went wrong</h1>

    return( 
    <div
    ref={carousel}
    style={divStyle}
    >
        <Button
        onClick={showLeft}
        >Left</Button>

        <Button
        onClick={showRight}
        >Right</Button>

    </div>
    )
}

export default Carousel;