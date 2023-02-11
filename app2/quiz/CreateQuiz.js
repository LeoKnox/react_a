import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz, quizData}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    const [newAns, setNewAns] = useState("orage");
    console.log("a:"+newQuiz);

    const changeForm = (e) => {
        e.preventDefault();
        console.log("x---");
        console.log(e.target.value);
        setNewQuiz(e.target.value);
        console.log("="+newQuiz);
    }

    const subQuiz = (e) => {
        e.preventDefault();
        let x= e.targetvalue;
        addQuiz(newQuiz);
    }

    return (
        <>
            <form onSubmit={subQuiz}>
                <input type="text" value={newQuiz} onChange={changeForm} />
                <input type="text" value={newAns} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;