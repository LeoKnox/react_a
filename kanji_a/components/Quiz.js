import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const kanjiClick = (id) => {
    if (id === myKanji[1].id) {
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
    //console.log(newKanji);
    return newKanji;
  };
  const [quizKanji, setQuizKanji] = useState();
  useEffect(() => {
    console.log("aaa");
    console.log("bbb" + findKanji());
    let y = findKanji;
    setQuizKanji([y]);
    console.log("+++" + y);
  }, []);
  return (
    <div>
      <h1>Quizes</h1>
      {myKanji.map((kanji) => {
        return (
          <div>
            <p onClick={() => kanjiClick(kanji.id)}>{kanji.kanji}</p>
          </div>
        );
      })}
    </div>
  );
};
