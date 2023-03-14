import { useNavigate } from 'react-router-dom';

function handleRoute() {
    console.log("red");
}

function Update() {
    return (
        <>
            <h3>update</h3>
            <button onClick={handleRoute}>Home</button>
        </>
    )
}

export default Update;