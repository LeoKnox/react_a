import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz, quizData}) => {
    const [q, setNewQuiz] = useState("z");
    const [a, setNewAns] = useState("orage");
    console.log("a:"+q);

    const changeForm = (e) => {
        e.preventDefault();
        console.log("x---");
        console.log(e.target.value);
        setNewQuiz(e.target.value);
        console.log("="+q);
    }

    const subQuiz = (e) => {
        e.preventDefault();
        let x= e.targetvalue;
        addQuiz({q, a});
    }

    return (
        <>
            <form onSubmit={subQuiz}>
                <input type="text" value={q} onChange={changeForm} />
                <input type="text" value={a} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;