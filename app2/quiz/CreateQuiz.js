import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz, quizData}) => {
    const [q, setNewQuiz] = useState("");
    const [a, setNewAns] = useState("");
    console.log("a:"+q);

    const changeEntry = (e) => {
        e.preventDefault();
        if (e.target.name === "ans") {
            setNewAns(e.target.value);
        }
        if (e.target.name === "quest") {
            setNewQuiz(e.target.value);
        }
    }

    const subQuiz = (e) => {
        e.preventDefault();
        let x= e.targetvalue;
        addQuiz({q, a});
    }

    return (
        <>
            <form onSubmit={subQuiz}>
                <input type="text" name="quest" value={q} onChange={changeEntry} />
                <input type="text" name="ans" value={a} onChange={changeEntry} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;