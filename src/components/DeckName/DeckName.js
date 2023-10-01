import React from 'react';
import styles from './DeckName.module.css';

function DeckComponent(){
    const[deckName, setDeckName] = React.useState('');
    const id = React.useId();

    return (
        <section className={styles.deckNameWrapper}>
            <label htmlFor={`deck-${id}`}>
                Deck Name: 
            </label>
            <input
                className=""
                id={`deck-${id}`}
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
            />
        </section>
    );
}

export default DeckComponent;