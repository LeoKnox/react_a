import { useEffect, useState } from "react";

export const Quiz = ({ myKanjis }) => {
  //console.log(myKanjis);
  const [quizKanji, setQuizKanji] = useState();
  useEffect(() => {
    setQuizKanji(myKanjis);
  });
  console.log(quizKanji);
  return (
    <div>
      <h1>Quizes</h1>
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
