import {useState} from 'react';

const CreateQuiz = ({addQuiz, getQuiz, quizData}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const changeForm = (e) => {
        e.preventDefault();
        return(setNewQuiz(e.target.value));
    }

    const subQuiz = (e) => {
        e.preventDefault();
        let x= e.targetvalue;
        console.log("x---");
        console.log(typeof(x));
        quizData.push(x);
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