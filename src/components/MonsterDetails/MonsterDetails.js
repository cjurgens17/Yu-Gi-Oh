import React from 'react';
import styles from './MonsterDetails.module.css';

function MonsterDetails({name, type, attribute}){
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