const Quiz = ({questions, answer}) => {
    console.log(questions);

    return (
        <>
        <h1>quiz me</h1>
        <p>ans: {answer}</p>
        {questions.map((q) => (
            <p>{q.q}</p>
        ))}
        </>
    )
};

export default Quiz;