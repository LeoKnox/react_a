import { useState } from "react";

export const Quiz = ({ myKanjis }) => {
  console.log(myKanjis);
  const [quizKanji, setQuizKanji] = useState([myKanjis]);
  console.log(quizKanji);
  return (
    <div>
      <h1>Quizes</h1>
      <p>{quizKanji[0]}ff</p>
      {myKanjis.map((kanji) => {
        return (
          <div>
            <p>tt</p>
            <p>{kanji.kanji}</p>
          </div>
        );
      })}
    </div>
  );
};
