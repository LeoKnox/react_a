const Quiz = ({questions}) => {
    console.log(questions);

    return (
        <>
        <h1>quiz me</h1>
        {questions.map((q) => (
            <p>{q.q}</p>
        ))}
        </>
    )
};

export default Quiz;