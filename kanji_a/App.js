import "./styles.css";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  console.log(KanjiList[1]);
  return (
    <div className="App">
      <h1>Kanjis</h1>
    </div>
  );
}
