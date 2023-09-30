import React from 'react';
import styles from './MonsterDetails.module.css';

function MonsterDetails({card}){
    
    //currently used card props, can add more if need to change
    const {name, type, attribute} = card;
    return (
        <div className={styles.monsterDetails}>
           <b>Name: </b><span>{name}</span>
           <br/>
           <b>Type: </b><span>{type}</span>
           <br/>
           <b>Attribute: </b><span>{attribute ?? 'None'}</span>
        </div>
    );
}

export default MonsterDetails;