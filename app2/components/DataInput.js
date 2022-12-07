import { useState } from 'react';

const DataInput = ({createRoom}) => {
    const [room, setRoom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        DataInput(room)
        setRoom("");
    }

    return (
        <>
        <input type="text" placehold="create room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <button onClick={handleSubmit}>Create</button>
        <div>Data input</div>
        </>
    )
}

export default DataInput