import React from "react";
import styles from './Monster.module.css';
import MonsterDialog from "../MonsterDialog";


function Monster({card}){
const cardImg = card.card_images[0].image_url
    return (
           <MonsterDialog card={card} trigger={<img className={styles.cover} alt={`Monster ${card.name}`} src={cardImg}/>} />
    );
}

export default Monster;