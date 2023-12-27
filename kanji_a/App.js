import "./styles.css";
import { useEffect, useState } from "react";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  const handleEdit = (id) => {
    alert("Edit " + id);
  };
  const handleDelete = (id) => {
    alert("delete " + id);
    if (id > 0) {
      const kd = KanjiList.filter((item) => item !== id);
      setMyKanji(kd);
    }
  };
  const [myKanji, setMyKanji] = useState([]);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  return (
    <div className="App">
      <h1>Kanjis</h1>
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
