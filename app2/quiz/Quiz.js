const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");
    const ans = questions[Math.floor(Math.random()*questions.length)].a;
    console.log(ans.a+"++");

    function checkAns(e) {
        console.log('red'+e.target.getAttribue('value'));
    }

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {ans}</p>
        {questions.map((q, i) => (
            <button onClick={(e) => alert(e.target.value)} value={i}>{q.q}</button>
        ))}
        </>
    )
};

export default Quiz;