import {useState} from 'react';

const Quiz = ({questions}) => {
    //console.log(JSON.stringify(answer)+"!!!!!!");
    console.log("quest"+JSON.stringify(questions));
    const [ans, setAns] = (useState(questions[Math.floor(Math.random()*questions.length)]));
    console.log("ans"+JSON.stringify(ans));

    function checkAns(e) {
        console.log(e.target.value+":::"+ans);
        if (e.target.value == ans) {
            console.log("you go it correct");
        }
        //setAns(questions[Math.floor(Math.random()*questions.length)].a)
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: </p>
        {questions.map((q, i) => (
            <button onClick={checkAns} value={q.a}>{q.q}:{i}</button>
        ))}
        </>
    )
};

export default Quiz;