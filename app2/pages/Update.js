import { useParams } from 'react-router-dom';

function Update() {
    const { kanjiId } = useParams();
    console.log(kanjiId);

    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
        </>
    )
}

export default Update;