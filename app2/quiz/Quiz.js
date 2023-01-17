const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");
    const ans = questions[Math.floor(Math.random()*questions.length)].a;
    console.log(ans.a+"++");

    function checkAns(e) {
        console.log(e.target.value+":::"+ans);
        if (e.target.value == ans) {
            console.log("you go it correct");
        }
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans}</p>
        {questions.map((q, i) => (
            <button onClick={checkAns} value={q.a}>{q.q}:{i}</button>
        ))}
        </>
    )
};

export default Quiz;