import YuGiOhCardProvider from "./components/YuGiOhCardsContext/YuGiOhCardsContext";
import React from "react";
import YugiohTool from "./components/YugiohTool";
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <YuGiOhCardProvider>
      <header className="header">
        <Header/>
        </header>
     <div className="wrapper">
        <YugiohTool/>
        </div>
    </YuGiOhCardProvider>
  );
}

export default App;
