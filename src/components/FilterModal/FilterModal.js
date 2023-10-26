import React from "react";
import { RACE, TYPES } from "../../constants/properties";
import { X } from "react-feather";
import FocusLock from "react-focus-lock";
import styles from "./FilterModal.module.css";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";

function FilterModal({ setFilterModal, setShowFiltered, filteredCards, setFilteredCards}) {
  const id = React.useId();
  const [name, setName] = React.useState("");
  const [race, setRace] = React.useState("");
  const[type, setType] = React.useState("");
  const exit = React.useRef();
  const {yuGiOhCards} = React.useContext(YuGiOhCardContext);


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

  function filterCards(){
    let nextFilteredCards = [...yuGiOhCards];

    //add more properties in the future if needed
    let filters = {
      name: name,
      race: race,
      frameType: type
    }

    const filterKeys = Object.keys(filters);

    for(let key of filterKeys){
     nextFilteredCards = nextFilteredCards.filter((card) => {
        return card[key].toLowerCase().includes(filters[key].toLowerCase());
      });
    }
    console.log(nextFilteredCards);
    setFilteredCards(nextFilteredCards);
    setShowFiltered(true);
  }

  function resetFilter(){
    setShowFiltered(false);
    setType("");
    setRace("");
    setName("");
  }

  return (
    <FocusLock returnFocus={true}>
          <aside aria-modal="true" role="dialog" className={styles.modal}>
            <article className={styles.modalHeader}>
              <h1 className={styles.filterTitle}>Filter Cards</h1>
              <button
                className={`${styles.xButton} ${styles.hoverX}`}
                ref={exit}
                onClick={() => setFilterModal(false)}
              >
                <X/>
              </button>
            </article>
            <form onSubmit={(e) => {
              e.preventDefault();
              filterCards();
              }} 
              className={styles.formColumn}>
              <label htmlFor={`name-${id}`}>Name</label>
              <input
                className="selectInput"
                id={`name-${id}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  filterCards();
                }}
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
              <label htmlFor={`type-${id}`}>Type</label>
              <select
                className="selectInput"
                id={`type-${id}`}
                value={type}
                onChange={(e)=> setType(e.target.value)}
              >
                {TYPES.map((type, index) => {
                  return <option
                    key={index}
                    value={type}                  
                  >{type}</option>
                })}
              </select>
              <button className={`primaryButton ${styles.filterButton}`}>
                Filter
              </button>
            </form>
            <button
               className="resetButton"
               onClick={resetFilter}
               >
                Reset Filter
              </button>
          </aside> 
    </FocusLock>
  );
}

export default FilterModal;
