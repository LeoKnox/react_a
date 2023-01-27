import {useState} from 'react';

const CreateQuiz = ({addQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const subQuiz = e => {
        setNewQuiz(e.target.value);
        alert("create quiz"+newQuiz);
        addQuiz(newQuiz);
    }

    return (
        <>
            <form onSubmit={addQuiz}>
                <input type="text" value="123" onChange={(e) => subQuiz(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;