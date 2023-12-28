import "./styles.css";
import { useEffect, useState } from "react";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  const [myKanji, setMyKanji] = useState([]);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  const handleSave = () => {
    alert("save");
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
        <input type="text" name="word" placeholder="enter word" />
        <label>Translation:</label>
        <input type="text" name="translation" placeholder="enter translation" />
        <button onClick={handleSave}>Save</button>
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
