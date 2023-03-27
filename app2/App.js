import {showKanji, addKanji, deleteKanji} from "./kanjiQuiz/kanji.js";
import Home from "./kanjiQuiz/home.js";
import {useEffect, useState} from "react";

function App() {
  return (
    <div className="App">
      <h1>Heading</h1>
      <Home />
    </div>
  )
}

export default App;
