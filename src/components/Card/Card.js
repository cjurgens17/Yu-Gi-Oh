import React from "react";
import Monster from '../Monster';
import styles from './Card.module.css';

function Card({img, type, name, attribute }){
    return (
        <div className={styles.cardWrapper}>
            <Monster
                img={img}
                type={type}
                name={name}
                attribute={attribute}
            />
        </div>
    );
}

export default Card;