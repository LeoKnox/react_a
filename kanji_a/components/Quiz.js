import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const [myData, setMyData] = useState(myKanji);
  const [quizKanji, setQuizKanji] = useState([]);
  const [answer, setAnswer] = useState(0);
  const kanjiClick = (id) => {
    console.log("KC" + myKanji[answer]["id"]);
    if (id === myKanji[answer]["id"]) {
      alert(true);
    }
  };
  const findKanji = () => {
    let newKanji = [];
    while (newKanji.length < 2) {
      let x = Math.floor(Math.random() * 3) + 1;
      if (newKanji.indexOf(x) === -1) {
        newKanji.push(x);
      }
    }
    //console.log("--" + newKanji);
    return newKanji;
  };
  useEffect(() => {
    //console.log("aaa");
    let y = findKanji();
    setAnswer(Math.floor(Math.random() * y.length));
    //console.log(`loc ${ansLoc} ans ${answer}`);
    /*
    console.log("MK" + myData);
    console.log("y" + y);
    let z = Math.floor(Math.random() * y.length);
    console.log("answer " + z);
    setAnswer(y[z]);
    //setAnswer(kanjiList[Math.floor(Math.random() * (y.length + 1))]);
    console.log("bbb" + JSON.stringify(answer));
    */
    setQuizKanji(y);
    console.log("+++" + y);
  }, []);
  return (
    <div>
      <h1>Quizes</h1>
      <h3>
        {myKanji[answer]["translation"]}--{answer}
      </h3>
      {quizKanji.map((kanji) => {
        return (
          <div>
            <p onClick={() => kanjiClick(myKanji[kanji - 1]["id"])}>
              {myKanji[kanji - 1]["kanji"]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
