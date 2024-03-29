import {showKanji, addKanji, deleteKanji} from "./kanji";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Home() {
    const [sk, setSK] = useState([]);
    const [a, setA] = useState("");
    const [q, setQ] = useState("");
    const [i, setId] = useState(0);

    useEffect(() => {
      setSK(showKanji());
      setId((showKanji()[showKanji().length-1].id)+1);
      //setId(showKanji().length-1);
      console.log("o");
      console.log(showKanji()[showKanji().length-1].id+1);
      console.log(i);
    }, [])

    function updateEntry(e) {
      if (e.target.name === "ans") {
        setA(e.target.value);
      }
      if (e.target.name === "ques") {
        setQ(e.target.value);
      }
      if (e.target.name === "id") {
        //setId(e.target.value);
      }
    }

    function updateKanji() {
      let newKanji = {a:a, q:q, id:i};
      addKanji(newKanji);
      setSK(showKanji());
      setA("");
      setQ("");
    }

    function removeKanji(e) {
      deleteKanji(e.target.value);
      setSK(showKanji());
    }

  return (
    <div className="App">
      {sk.map ((tt, i) => (
        <p>{tt.a}
            <button value={tt.id} onClick={removeKanji}>X</button>
            <button><Link to={`/update/${tt.id}`}>Update</Link></button>
        </p>
      ))}
      <p>
        <label>&nbsp;answer:</label>
        <input type="text" name="ans" value={a} onChange={updateEntry} />
        <label>&nbsp;question:</label>
        <input type="text" name="ques" value={q} onChange={updateEntry} />
        <label>&nbsp;id:</label>
        <input type="number" name="id" value={i} />
      </p>
      <p>{i}</p>
      <button onClick={updateKanji}>Add</button>
      
    </div>
  )
}

export default Home;
