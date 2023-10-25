import React from 'react';
import styles from './Export.module.css';

function Export(){

const exportDeck = () => {
    
}

    return (
       <section>
        <button onClick={() => {
            exportDeck();
        }}>
            Export
        </button>
       </section> 
    )
}

export default Export;