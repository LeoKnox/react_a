import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const [myData, setMyData] = useState(myKanji);
  const [quizKanji, setQuizKanji] = useState([]);
  const [answer, setAnswer] = useState(0);
  const kanjiClick = (id) => {
    console.log(` myKanji.id ${myKanji[answer]["id"]} id ${id}`);
    if (id === myKanji[answer]["id"]) {
      alert(true);
    }
  };
  const findKanji = () => {
    let newKanji = [];
    while (newKanji.length < 2) {
      let x = Math.floor(Math.random() * myKanji.length) + 1;
      if (newKanji.indexOf(x) === -1) {
        newKanji.push(myKanji[x]);
      }
    }
    //console.log("--" + newKanji);
    return newKanji;
  };
  useEffect(() => {
    //console.log("aaa");
    //let y = findKanji();
    let y = [
      {
        id: 1,
        kanji: "赤",
        word: "akai",
        translation: "red",
      },
      {
        id: 2,
        kanji: "青",
        word: "aoi",
        translation: "blue",
      },
    ];
    let tempKanji = findKanji();
    console.log(`temp kanji ${JSON.stringify(tempKanji)}`);
    setAnswer(y[Math.floor(Math.random() * y.length)]["translation"]);
    setQuizKanji(y);
    console.log(`quiz kanji ${y} answer ${myKanji[answer]["id"]}`);
  }, []);
  return (
    <div>
      <h1>Quizes</h1>
      <h3>--{answer}</h3>
      {quizKanji.map((kanji) => {
        return (
          <div>
            <p onClick={() => kanjiClick(kanji["id"])}>
              {kanji["kanji"]}--{kanji["id"]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
