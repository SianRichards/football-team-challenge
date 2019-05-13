import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerContainer from "./components/playerContainer";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PlayerContainer />
      </header>
    </div>
  );
};

export default App;
