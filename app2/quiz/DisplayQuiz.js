import {useState} from 'react';
import CreateQuiz from './quiz/CreateQuiz';

const DisplayQuiz = ({quizes}) => {
    const [myQuizes, setMyQuizes] = useState(quizes);
    console.log("quizes");
    console.log(myQuizes);

    function getQuiz(e) {
    //e.preventDeafult();
    //let x = qdOne.sort(() => Math.random() - Math.random()).slice(0, 4);
    let x = 1;
    setQuiz(x);
    }

    function addQuiz(pushQuiz) {
    let x = myQuizes;
    x.push(pushQuiz);
    setQdOne(x);
    }

    return (
        <>
        <h1>sub quizes</h1>
        <CreateQuiz addQuiz={addQuiz} getQuiz={getQuiz} quiData={quizData} />
        {myQuizes.map((mq) => (
            <p>{mq.a}</p>
        ))}
        </>
    )
}

export default DisplayQuiz;