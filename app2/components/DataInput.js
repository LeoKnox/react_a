import { useState } from 'react';

const DataInput = ({createRoom}) => {
    const [room, setRoom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        createRoom(room)
        setRoom("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placehold="create room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <button>Create</button>
        <div>Data input</div>
        </form>
    )
}

export default DataInput