const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");
    const ans = questions[Math.floor(Math.random()*questions.length)].a;
    console.log(ans.a+"++");

    function checkAns(e) {
        alert('a');
        console.log('red'+e.target.value);
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans}</p>
        {questions.map((q, i) => (
            <button onClick={(e) => checkAns} value={i}>{q.q}:{i}</button>
        ))}
        </>
    )
};

export default Quiz;