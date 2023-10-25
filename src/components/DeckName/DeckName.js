import React from 'react';
import styles from './DeckName.module.css';
import { UserDeckContext } from '../UserDeckContext/UserDeckContext';

function DeckComponent(){
    const {userDeckData, setUserDeckData} = React.useContext(UserDeckContext);
    const id = React.useId();

    return (
        <section className={styles.deckNameWrapper}>
            <label htmlFor={`deck-${id}`}>
                Deck Name: 
            </label>
            <input
                className=""
                id={`deck-${id}`}
                value={userDeckData.deckName}
                onChange={(e) => {
                    setUserDeckData({...userDeckData, deckName: e.target.value})
                }}
            />
        </section>
    );
}

export default DeckComponent;