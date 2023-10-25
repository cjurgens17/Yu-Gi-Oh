import React from "react";

import CardScrollView from "../CardScrollView/CardScrollView";
import CardResults from "../CardResults";
import SortCards from "../SortCards/SortCards";
import OpenFilterModal from "../OpenFilterModal/OpenFilerModal";
import FilterModal from "../FilterModal/FilterModal";
import DeckName from "../DeckName";

import styles from "./YugiohTool.module.css";
import MainDeck from "../MainDeck";
import SideDeck from "../SideDeck";
import ExtraDeck from "../ExtraDeck";
import Export from '../Export';
import UserDeckProvider from "../UserDeckContext/UserDeckContext";

function YugiohTool() {
  const [filterModal, setFilterModal] = React.useState(false);
  const [showFiltered, setShowFiltered] = React.useState(false);
  const [filteredCards, setFilteredCards] = React.useState([]);

  return (
    <UserDeckProvider>
    <div className={styles.gridWrapper}>
      {filterModal && (
        <FilterModal
          setShowFiltered={setShowFiltered}
          setFilterModal={setFilterModal}
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
        ></FilterModal>
      )}
      <header className={styles.filter}>
        <DeckName />
        <Export/>
      </header>
      <main className={styles.details}>
        {/* <Carousel></Carousel> */}
          <MainDeck/>
          <SideDeck/>
          <ExtraDeck/>
      </main>
      <aside className={styles.cardScroll}>
        
        <section className={styles.header}>
          <CardResults
            showFiltered={showFiltered}
            filteredCards={filteredCards}
          />
          <OpenFilterModal setFilterModal={setFilterModal} />
        </section>
        <section className={styles.sort}>
          <SortCards />
        </section>
        <section className={styles.cards}>
          <CardScrollView
            showFiltered={showFiltered}
            filteredCards={filteredCards}
          />  
        </section>
      </aside>
    </div>
    </UserDeckProvider>
  );
}

export default YugiohTool;
