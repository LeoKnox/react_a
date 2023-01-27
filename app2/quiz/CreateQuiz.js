import {useState} from 'react';

const CreateQuiz = ({addQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    const changeForm = () => {
        console.log("1");
    }

    const subQuiz = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setNewQuiz(e.target.value);
        alert("create quiz"+newQuiz);
        addQuiz(newQuiz);
    }

    return (
        <>
            <form onSubmit={subQuiz}>
                <input type="text" value="123" onChange={changeForm} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;