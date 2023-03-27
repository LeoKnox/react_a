import { useParams } from 'react-router-dom';

function Update() {
    const { kanjiId } = useParams();

    return (
        <>
            <h3>update kanji {kanjiId}</h3>
        </>
    )
}

export default Update;