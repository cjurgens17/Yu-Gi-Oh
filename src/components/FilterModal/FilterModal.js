import React from "react";
import { TYPES } from "../../constants/properties";
import { YuGiOhCardContext } from "../YuGiOhCardsContext/YuGiOhCardsContext";
import { X } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./FilterModal.module.css";

//we need to add an escape that resest the state of the modal to false and then add accessibilty options to this

function FilterModal({ setFilterModal }) {
  const id = React.useId();
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const { yuGiOhCards, setYugiOhCards } = React.useContext(YuGiOhCardContext);
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

  //not working right now--potentially turn this into api request and rest the yugioh cards
  function filterData() {
    let newData = [...yuGiOhCards];

    //Can add more filters in the future here.
    const filters = [
      { key: "type", value: type },
      { key: "name", value: name },
    ];

    filters.forEach((filter) => {
      if (filter.value !== "") {
        newData = newData.filter((item) => {
          return item[filter.key] === filter.value;
        });
      }
    });

    setYugiOhCards(newData);
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
            <form onSubmit={filterData} className={styles.formColumn}>
              <label htmlFor={`name-${id}`}>Name</label>
              <input
                className="selectInput"
                id={`name-${id}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor={`type-${id}`}>Type</label>
              <select
                className="selectInput"
                id={`type-${id}`}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {TYPES.map((type, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>{" "}
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
