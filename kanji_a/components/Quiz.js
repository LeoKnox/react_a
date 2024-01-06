import { useEffect, useState } from "react";

export const Quiz = ({ myKanji }) => {
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
            <p>{kanji.kanji}</p>
          </div>
        );
      })}
    </div>
  );
};
