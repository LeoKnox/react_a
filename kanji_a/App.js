import "./styles.css";
import { useEffect, useState } from "react";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  const [myKanji, setMyKanji] = useState([]);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  return (
    <div className="App">
      <h1>Kanjis</h1>
    </div>
  );
}
