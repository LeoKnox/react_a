import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
  const kanjiClick = (id) => {
    if (id === myKanji[1].id) {
      alert(true);
    }
  };
  const findKanji = () => {
    console.log("find kanji");
  };
  const [quizKanji, setQuizKanji] = useState();
  useEffect(() => {
    findKanji();
    setQuizKanji(myKanji);
  });
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
