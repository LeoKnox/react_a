import { useLoaderData } from 'react-router-dom';

function Update() {
    const { kanjiId } = useLoaderData();
    console.log(kanjiId);
    
    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
        </>
    )
}

export default Update;