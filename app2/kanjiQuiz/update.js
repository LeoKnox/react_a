import { useParams } from 'react-router-dom';

function Update() {
    const {kanjiId} = useParams();
    console.log(kanjiId);

    return (
        <>
            <h3>update kanji {kanjiId}</h3>
        </>
    )
}

export default Update;