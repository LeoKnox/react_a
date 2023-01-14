const Quiz = ({questions, answer}) => {
    console.log(JSON.stringify(answer)+"!!!!!!");

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {answer.a}</p>
        {questions.map((q) => (
            <p>{q.q}</p>
        ))}
        </>
    )
};

export default Quiz;