import React from "react";
import styles from './Monster.module.css';


function Monster({img, name}){

    return (
            <img className={styles.cover} alt={`Monster ${name}`} src={img}/>
    );
}

export default Monster;