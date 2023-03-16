import { useParams } from 'react-router-dom';

function Update({oldKanji}) {
    const { kanjiId, newId } = useParams();
    console.log(oldKanji);

    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
        </>
    )
}

export default Update;