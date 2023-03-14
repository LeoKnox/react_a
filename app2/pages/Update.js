import { useNavigate } from 'react-router-dom';

function HandleRoute() {
    useNavigate("/");
    console.log("red");
}

function Update() {
    return (
        <>
            <h3>update</h3>
            <button onClick={HandleRoute}>Home</button>
        </>
    )
}

export default Update;