import React from 'react';
import { UserDeckContext } from '../UserDeckContext/UserDeckContext';
// import styles from './Import.module.css';


function Import(){
    const {setUserDeckData} = React.useContext(UserDeckContext);

    const handleFileImport = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
      
          reader.onload = (event) => {
            const jsonData = JSON.parse(event.target.result);
            const nextUserDeckData = jsonData;
            setUserDeckData(nextUserDeckData);
          };
          reader.readAsText(file);
        }
    }

    return (
        <section>
            <label>Import Deck</label>
            <input type="file" accept=".json" onChange={handleFileImport}></input>
        </section>
        
    );
}

export default Import;