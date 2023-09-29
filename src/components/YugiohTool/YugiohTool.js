import React from 'react';

import CardScrollView from "../CardScrollView/CardScrollView";
import CardResults from "../CardResults";
import SortCards from "../SortCards/SortCards";
import OpenFilterModal from "../OpenFilterModal/OpenFilerModal";
import FilterModal from "../FilterModal/FilterModal";
import Carousel from "../Carousel";
import styles from './YugiohTool.module.css';


function YugiohTool(){
    const [filterModal, setFilterModal] = React.useState(false);
    const [showFiltered, setShowFiltered] = React.useState(false);
    const [filteredCards, setFilteredCards] = React.useState([]);

    return (
        <div className={styles.gridWrapper}>
        {filterModal && (
          <FilterModal setShowFiltered={setShowFiltered} setFilterModal={setFilterModal} filteredCards={filteredCards} setFilteredCards={setFilteredCards}></FilterModal>
        )}
        <header className={styles.filter}>
          <h1>Yugioh</h1>
        </header>
        <main className={styles.details}>
          <Carousel></Carousel>
        </main>
        <aside>
          <section className={styles.header}>
            <CardResults showFiltered={showFiltered} filteredCards={filteredCards}/>
            <OpenFilterModal setFilterModal={setFilterModal}/>
          </section>
          <section className={styles.sort}>
            <SortCards/>
          </section>
          <section className={styles.cards}>
          <CardScrollView showFiltered={showFiltered} filteredCards={filteredCards}/>
          </section>
        </aside>
      </div>
    );
}

export default YugiohTool;