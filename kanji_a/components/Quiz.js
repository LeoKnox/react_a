import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const [myData, setMyData] = useState(myKanji);
  const [quizKanji, setQuizKanji] = useState([]);
  const [answer, setAnswer] = useState("");
  const kanjiClick = (id) => {
    console.log(` myKanji.id ${myKanji[answer]["id"]} id ${id}`);
    if (id === myKanji[answer]["id"]) {
      alert(true);
    }
  };
  const findKanji = () => {
    console.log(`my kanji ${myKanji}`);
    let tempArr = myKanji;
    let newKanji = [];
    console.log(`temp arr ${JSON.stringify(tempArr)}`);
    while (tempArr.length > 0) {
      console.log("did i run?");
      let x = Math.floor(Math.random() * myKanji.length);
      newKanji.push(tempArr.splice(x, 1));
    }
    console.log("--" + JSON.stringify(tempArr));
    setQuizKanji(newKanji);
    return newKanji;
  };
  useEffect(() => {
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
    let z = [];
    const tempKanji = findKanji();
    console.log(`temp kanji ${JSON.stringify(tempKanji)}`);
    setAnswer(
      tempKanji[Math.floor(Math.random() * tempKanji.length)]["translation"]
    );
    const newAnswer =
      tempKanji[Math.floor(Math.random() * tempKanji.length)]["translation"];
    setAnswer(newAnswer);
    console.log(answer);
    //setQuizKanji(tempKanji);
    console.log(`quiz kanji ${JSON.stringify(quizKanji)} answer ${answer}`);
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
