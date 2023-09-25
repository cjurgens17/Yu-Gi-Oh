import React from 'react';
import useSWR from 'swr';
import Button from '../Button';
import CarouselImage from '../CarouselImage';


const ENDPOINT= 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes';
async function getCards(ENDPOINT){
    const resp = await fetch(ENDPOINT);

    if(!resp.ok){
        throw resp
    }

    const data = await resp.json();

    console.log('data' + data)

    return data;
}

function Carousel(){
    const[index, setIndex] = React.useState(0);
    const {data, isLoading, error} = useSWR(ENDPOINT, getCards);
    const memoizedData = React.useMemo(() => data,[data]);
    
    function showLeft(){
        if(index === 0){
            setIndex(memoizedData.data.length - 1);
            return;
        }
        
        setIndex(index - 1);
}

function showRight(){
    if(index === memoizedData.data.length - 1){
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

      if(isLoading) return <h1>Loading</h1>
      if(error) return <h1>Oops Something Went wrong</h1>

    return( 
    <div
    style={divStyle}
    >
        <Button
        onClick={showLeft}
        >Left</Button>

        <CarouselImage data={memoizedData} index={index}></CarouselImage>

        <Button
        onClick={showRight}
        >Right</Button>

    </div>
    )
}

export default Carousel;