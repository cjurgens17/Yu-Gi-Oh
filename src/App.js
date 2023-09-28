import OpenFilterModal from "./components/OpenFilterModal/OpenFilerModal";
import FilterModal from "./components/FilterModal/FilterModal";
import Carousel from "./components/Carousel";
import YuGiOhCardProvider from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";
import CardScrollView from "./components/CardScrollView/CardScrollView";
import CardResults from "./components/CardResults";
import SortCards from "./components/SortCards/SortCards";
import "./App.css";

function App() {
  const [filterModal, setFilterModal] = React.useState(false);

  return (
    <YuGiOhCardProvider>
      <div className="grid-wrapper">
        {filterModal && (
          <FilterModal setFilterModal={setFilterModal}></FilterModal>
        )}
        <header className="filter">
          <h1>Yugioh</h1>
        </header>
        <main className="details">
          <Carousel></Carousel>
        </main>
        <aside>
          <section className="header">
            <CardResults />
            <OpenFilterModal setFilterModal={setFilterModal}/>
          </section>
          <section className="sort">
            <SortCards/>
          </section>
          <section className="cards">
          <CardScrollView/>
          </section>
        </aside>
      </div>
    </YuGiOhCardProvider>
  );
}

export default App;
