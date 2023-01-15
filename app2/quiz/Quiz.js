import {useState} from 'react';

const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");
    const [ans, setAns] = useState(questions[Math.floor(Math.random()*questions.length)-1]);
    console.log(ans.a+"++");

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans.a}</p>
        {questions.map((q) => (
            <p>{q.q}</p>
        ))}
        </>
    )
};

export default Quiz;