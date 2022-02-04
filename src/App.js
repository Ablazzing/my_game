import './App.css';
import GameTable from './components/game';
import { useState } from "react";
import staticGameData from "./static/gamedata.json"
import Question from './components/question';
import AuctionWarning from "./components/auctionWarning";

function App() {
  const [gameData, setGameData] = useState(staticGameData)
  return (
    <div className="App flex">
      <AuctionWarning />
      <Question />
      <GameTable gameData={gameData} gamers={["Саша", "Артем", "Семен", "Настя", "Дима", "Ольга"]} round={3}/>
    </div>
  );
}


export default App;
