import {useState} from 'react';

const CreateQuiz = ({addQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const subQuiz = e => {
        alert(e.target.value);
        setNewQuiz(e.target.value);
        alert("create quiz"+newQuiz);
        addQuiz(newQuiz);
    }

    return (
        <>
            <form onSubmit={e => subQuiz()}>
                <input type="text" value="123" onChange={e => subQuiz()} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;