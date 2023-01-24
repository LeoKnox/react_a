const CreateQuiz = ({addQuiz}) => {
    return (
        <>
            <form>
                <input type="text" name="q" />
                <input type="button" onClick={addQuiz}>Add</input>
            </form>
        </>
    )
}

export default CreateQuiz;