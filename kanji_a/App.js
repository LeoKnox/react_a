import "./styles.css";
import { useEffect, useState } from "react";
import { KanjiList } from "./components/KanjiList.js";

export default function App() {
  const [myKanji, setMyKanji] = useState([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  const handleSave = () => {
    alert("save");
  };
  const handleUpdate = () => {
    const index = myKanji
      .map((kanji) => {
        return kanji.id;
      })
      .indexOf(id);
    const kt = [...myKanji];
    kt[index].word = word;
    kt[index].translation = translation;
    setMyKanji(kt);
  };
  const handleClear = () => {
    setIsUpdate(false);
    setId(0);
    setWord("");
    setTranslation("");
  };
  const handleEdit = (id) => {
    const kd = myKanji.filter((item) => item.id === id);
    if (kd !== undefined) {
      setIsUpdate(true);
      setId(kd[0].id);
      setWord(kd[0].word);
      setTranslation(kd[0].translation);
    } else {
      alert("ni");
    }
  };
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure?")) {
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
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <label>Translation:</label>
        <input
          type="text"
          value={translation}
          placeholder="enter translation"
          onChange={(e) => setTranslation(e.target.value)}
        />
        {!isUpdate ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleClear}>Clear</button>
      </div>
      <br />
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
