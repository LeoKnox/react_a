import "./styles.css";
import { useEffect, useState } from "react";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  const [myKanji, setMyKanji] = useState([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [id, setId] = useState(0);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  const handleSave = () => {
    alert("save");
  };
  const handleClear = () => {
    alert("clear");
  };
  const handleEdit = (id) => {
    alert("Edit " + id);
  };
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure")) {
        const kd = myKanji.filter((item) => item.id !== id);
        setMyKanji(kd);
      }
    }
  };

  return (
    <div className="App">
      <h1>Kanjis</h1>
      <div>
        <label>Word:</label>
        <input
          type="text"
          placeholder="enter word"
          onClick={(e) => setWord(e.target.value)}
        />
        <label>Translation:</label>
        <input
          type="text"
          placeholder="enter translation"
          onClick={(e) => setTranslation(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <table>
        <thead>
          <th>Word</th>
          <th>Translation</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {myKanji.map((kanjis, index) => {
            return (
              <tr key={index}>
                <td>{kanjis.word}</td>
                <td>{kanjis.translation}</td>
                <td>
                  <button onClick={() => handleEdit(kanjis.id)}>edit</button>
                  <button onClick={() => handleDelete(kanjis.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
