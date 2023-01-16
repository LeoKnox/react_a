const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");
    const ans = questions[Math.floor(Math.random()*questions.length)].a;
    console.log(ans.a+"++");

    function checkAns(e) {
        console.log('red'+e.target.id);
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans}</p>
        {questions.map((q, i) => (
            <p onClick={(e) => checkAns} id={i}>{q.q}</p>
        ))}
        </>
    )
};

export default Quiz;