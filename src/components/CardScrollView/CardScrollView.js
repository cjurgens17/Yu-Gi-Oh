import React from "react";
import Card from '../Card';
import useSWR from "swr";

import styles from './CardScrollView.module.css';

const ENDPOINT= 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes';
async function getCards(ENDPOINT){
    const resp = await fetch(ENDPOINT);

    if(!resp.ok){
        throw resp
    }

    const data = await resp.json();

    return data;
}

/*image properties:
    image_url: regular image -- larger size
    image_url_cropped: -- cropped version of the large image
    image_url_small: smaller size
*/
function CardScrollView(){

        const {data, isLoading, error} = useSWR(ENDPOINT, getCards);
        console.log(data);

        if(isLoading) return <h1>Loading Cards</h1>

        if(error) return <h1>Ooops Something Went Wrong</h1>

    return (
        <div className={styles.container}>
        {    
        data.data.map((card,index) => {
            return  <Card
            key={index}
            img={card.card_images[0].image_url_small}
            type={card.type}
            name={card.name}
            attribute={card.attribute} 
         ></Card>
        })
        }
        </div>
    )
}

export default CardScrollView;