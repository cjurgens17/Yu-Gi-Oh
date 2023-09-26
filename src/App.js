import OpenFilterModal from "./components/OpenFilterModal/OpenFilerModal";
import FilterModal from "./components/FilterModal/FilterModal";
import Carousel from './components/Carousel';
import  YuGiOhCardProvider  from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";

function App() {
const[filterModal, setFilterModal] = React.useState(false);


  return (
    <YuGiOhCardProvider>
      {filterModal && <FilterModal setFilterModal={setFilterModal}></FilterModal>}
      <OpenFilterModal setFilterModal={setFilterModal}></OpenFilterModal>
      <Carousel></Carousel>
    </YuGiOhCardProvider>
  );
}

export default App;
