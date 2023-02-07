import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const changeForm = (e) => {
        e.preventDefault();
        setNewQuiz(e.target.value);
    }

    const subQuiz = (e) => {
        e.preventDefault();
        setNewQuiz(e.target.value);
    }

    return (
        <>
            <form onSubmit={addQuiz}>
                <input type="text" value={newQuiz} onChange={changeForm} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;