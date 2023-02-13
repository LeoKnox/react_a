import {useState, useEffect} from 'react';

const Quiz = ({questions, getQuiz, quizData}) => {
    const [ans, setAns] = useState();

    useEffect(() => {
        console.log("use efffect quiz");
        setAns(questions[Math.floor(Math.random()*questions.length)].a);
    })

    function checkAns(e) {
        if (e.target.value == ans) {
            console.log("you go it correct");
            getQuiz();
            setAns(questions[Math.floor(Math.random()*questions.length)].a);
        } else {
            console.log("WRONG!!!!");
        }
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans}</p>
        {questions.map((q, i) => (
            <button onClick={checkAns} value={q.a}>{q.q}</button>
        ))}
        <p>All</p>
        </>
    )
};

export default Quiz;