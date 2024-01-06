import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const kanjiClick = (id) => {
    if (id === myKanji[1].id) {
      alert(true);
    }
  };
  console.log(myKanji);
  const [quizKanji, setQuizKanji] = useState();
  useEffect(() => {
    setQuizKanji(myKanji);
  });
  console.log("xx");
  console.log(quizKanji);
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
