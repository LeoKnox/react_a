import {useState} from 'react';

const CreateQuiz = ({addQuiz}) => {
    const [newQuiz, setNewQuiz] = useState("z");
    console.log("a:"+newQuiz);

    return (
        <>
            <form onSubmit={addQuiz}>
                <input type="text" value={newQuiz} onChange={(e) => setNewQuiz(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default CreateQuiz;