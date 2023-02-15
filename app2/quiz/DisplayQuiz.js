import {useState} from 'react';
import CreateQuiz from './CreateQuiz';

const DisplayQuiz = ({quizes}) => {
    const [myQuizes, setMyQuizes] = useState(quizes);
    console.log("quizes");
    console.log(myQuizes);

    function getQuiz(e) {
    //e.preventDeafult();
    //let x = qdOne.sort(() => Math.random() - Math.random()).slice(0, 4);
    let x = 1;
    setMyQuizes(x);
    }

    function addQuiz(pushQuiz) {
    let x = myQuizes;
    x.push(pushQuiz);
    setMyQuizes(x);
    }

    function deleteQuiz() {
        console.log("akai");
    }

    return (
        <>
        <h1>sub quizes</h1>
        <CreateQuiz addQuiz={addQuiz} quizData={myQuizes} />
        {myQuizes.map((mq) => (
            <p>answer:{mq.a} question:{mq.q}<button onClick={deleteQuiz}>Delete</button></p>
        ))}
        </>
    )
}

export default DisplayQuiz;