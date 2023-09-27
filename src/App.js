import OpenFilterModal from "./components/OpenFilterModal/OpenFilerModal";
import FilterModal from "./components/FilterModal/FilterModal";
import Carousel from "./components/Carousel";
import YuGiOhCardProvider from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";
import CardScrollView from "./components/CardScrollView/CardScrollView";
import "./App.css";

function App() {
  const [filterModal, setFilterModal] = React.useState(false);

  return (
    <YuGiOhCardProvider>
      <div className="grid-wrapper">
        {filterModal && (
          <FilterModal setFilterModal={setFilterModal}></FilterModal>
        )}
        <OpenFilterModal setFilterModal={setFilterModal}></OpenFilterModal>
        <header className="f">
          <h1>Yugioh</h1>
        </header>
        <body className="d">
          <Carousel></Carousel>
        </body>
        <aside className="c">
          <CardScrollView></CardScrollView>
        </aside>
      </div>
    </YuGiOhCardProvider>
  );
}

export default App;
