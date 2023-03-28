import { useParams } from 'react-router-dom';

function Update() {
    const {id} = useParams();
    console.log(id);

    return (
        <>
            <h3>update kanji {id}</h3>
        </>
    )
}

export default Update;