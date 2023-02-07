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
        addQuiz(e.target.value);
    }

    return (
        <>
            <form onSubmit={subQuiz}>
                <input type="text" value={newQuiz} onChange={changeForm} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;