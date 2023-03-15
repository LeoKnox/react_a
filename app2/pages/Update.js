import { useNavigate } from 'react-router-dom';

function handleRoute() {
    console.log("red");
}

function Update() {
    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
        </>
    )
}

export default Update;