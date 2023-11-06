import YuGiOhCardProvider from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";
import YugiohTool from "./components/YugiohTool";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="background">
       <header className="header">
            <Header />
          </header>
      <div className="wrapper">
      <YuGiOhCardProvider>
            <YugiohTool/>
      </YuGiOhCardProvider>
      </div>
    </div>
  );
}

export default App;
