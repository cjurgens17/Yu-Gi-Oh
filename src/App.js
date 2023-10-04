import YuGiOhCardProvider from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";
import YugiohTool from "./components/YugiohTool";
import './App.css';

function App() {

  return (
    <YuGiOhCardProvider>
     <div className="wrapper">
        <YugiohTool/>
        </div>
    </YuGiOhCardProvider>
  );
}

export default App;
