import React from "react";
import { RACE } from "../../constants/properties";
import { X } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./FilterModal.module.css";

function FilterModal({ setFilterModal, setShowFiltered, filteredCards, setFilteredCards}) {
  const ENDPOINT = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  const id = React.useId();
  const [name, setName] = React.useState("");
  const [race, setRace] = React.useState("");
  const exit = React.useRef();


  //escape modal of escape keypress
  React.useEffect(() => {
    function escape(e) {
      if (e.code === "Escape") {
        setFilterModal(false);
      }
    }

    window.addEventListener("keydown", escape);

    return () => window.removeEventListener("keydown", escape);
  }, [setFilterModal]);

  //async function to get filtered cards from api
  async function getFilteredCards(ENDPOINT){
    ENDPOINT += `?race=${race.toLowerCase()}`;
    console.log(ENDPOINT);
    const resp = await fetch(ENDPOINT);
    if(!resp.ok) throw resp;

    const data = await resp.json();
    if(data) setFilteredCards([data.data]);
    console.log(filteredCards[0]);
    setShowFiltered(true);
  }

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div aria-modal="true" role="dialog" className={styles.modal}>
          <section className={styles.modalColumn}>
            <div className={styles.modalHeader}>
              <h1 className={styles.filterTitle}>Filter Cards</h1>
              <button
                className={`${styles.xButton} ${styles.hoverX}`}
                ref={exit}
                onClick={() => setFilterModal(false)}
              >
                <X/>
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              getFilteredCards(ENDPOINT)
              }} 
              className={styles.formColumn}>
              <label htmlFor={`name-${id}`}>Name</label>
              <input
                className="selectInput"
                id={`name-${id}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor={`race-${id}`}>Race</label>
              <select
                className="selectInput"
                id={`race-${id}`}
                value={race}
                onChange={(e) => {
                  console.log(e.target.value);
                  setRace(e.target.value)}}
              >
                {RACE.map((race, index) => {
                  return (
                    <option
                    key={index}
                    value={race}
                    >
                      {race}
                    </option>
                  )
                })}
              </select>
              <button className={`primaryButton ${styles.filterButton}`}>
                Filter
              </button>
            </form>
          </section>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default FilterModal;
