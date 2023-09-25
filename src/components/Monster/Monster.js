import React from "react";
import styles from './Monster.module.css';


function Monster({img, name, type, attribute}){

    return (
        <>
        <div>
            <img alt={`Monster ${name}`} src={img}/>
        </div>

        <div className={styles.monsterInfo}>
            <p>{name}</p>
            <p>{type}</p>
            <p>{attribute}</p>
        </div>
        </>
    );
}

export default Monster;