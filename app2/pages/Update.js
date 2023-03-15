import { useParams } from 'react-router-dom';

function Update() {
    const { kanjiId, newId } = useParams();
    console.log(kanjiId + ":" + newId);

    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
        </>
    )
}

export default Update;