import { useState } from "react";

export const Quiz = ({ myKanjis }) => {
  console.log(myKanjis);
  const [quizKanji, setQuizKanji] = useState(myKanjis);
  return (
    <div>
      <h1>Quizes</h1>
      {quizKanji.map((kanji) => {
        <div>{kanji.kanji}</div>;
      })}
    </div>
  );
};
