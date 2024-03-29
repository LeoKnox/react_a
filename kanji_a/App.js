import "./styles.css";
import { useEffect, useState, useRef } from "react";
import { KanjiList } from "./components/KanjiList.js";
import { Quiz } from "./components/Quiz.js";

export default function App() {
  //const buttonStyle = { border: "blue solid .3em" };
  const buttonStyle = {
    //border: "blue solid .3em",
    color: "white",
    boxShadow: "0px 8px 10px darkred",
    backgroundColor: "red",
    borderRadius: "10px",
    padding: "0.3em",
    fontSize: "1.1em",
    fontWeight: "bold",
    marginRight: "1em",
    marginTop: "0.4em",
  };
  const [isQuiz, setIsQuiz] = useState(false);
  const [myKanji, setMyKanji] = useState([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setMyKanji(KanjiList);
  }, []);
  const handleSave = (e) => {
    let error = "";
    if (word === "") {
      error += "word needed";
    }
    if (translation === "") {
      error += "translation needed";
    }
    if (error === "") {
      e.preventDefault();
      newKanji = {
        id: myKanji.length + 1,
        word: word,
        translation: translation,
      };
      const kt = [...myKanji, newKanji];
      setMyKanji(kt);
    } else {
      alert(error);
    }
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
    handleClear();
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
        handleClear();
      }
    }
  };

  return (
    <div className="App">
      <h1 className="mainHeading">Kanjis</h1>
      <button onClick={() => setIsQuiz(false)}>List</button>
      <button onClick={() => setIsQuiz(true)}>Quiz</button>
      <br />
      {isQuiz ? (
        <Quiz myKanji={myKanji} />
      ) : (
        <>
          <ul className="addKanji">
            <li>
              <label>Word:</label>
              <input
                type="text"
                placeholder="enter word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </li>
            <li>
              <label>Translation:</label>
              <input
                type="text"
                value={translation}
                placeholder="enter translation"
                onChange={(e) => setTranslation(e.target.value)}
              />
            </li>
            <li>
              {!isUpdate ? (
                <button
                  className="saveButton"
                  style={buttonStyle}
                  onClick={(e) => handleSave(e)}
                >
                  Save
                </button>
              ) : (
                <button onClick={handleUpdate}>Update</button>
              )}
              <button
                onClick={handleClear}
                style={buttonStyle}
                className="saveButton"
              >
                Clear
              </button>
            </li>
          </ul>
          <br />
          <table className="kanjis">
            <thead className="kanjisheader">
              <tr>
                <th>Kanji</th>
                <th>Word</th>
                <th>Translation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myKanji.map((kanjis, index) => {
                return (
                  <tr key={index} className="kanjisdata">
                    <td claasName="kanjiStyle">{kanjis.kanji}</td>
                    <td>{kanjis.word}</td>
                    <td>{kanjis.translation}</td>
                    <td>
                      <button
                        className="buttonKanji"
                        onClick={() => handleEdit(kanjis.id)}
                      >
                        edit
                      </button>
                      <button
                        className="buttonKanji"
                        onClick={() => handleDelete(kanjis.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
