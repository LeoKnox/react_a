import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const changeForm = () => {
        console.log("1");
    }

    const subQuiz = (e) => {
        e.preventDefault();
        alert("create quiz"+newQuiz);
        addQuiz(newQuiz);
    }

    return (
        <>
            <form onSubmit={getQuiz}>
                <input type="text" value={newQuiz} onChange={(e) =>setNewQuiz(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;