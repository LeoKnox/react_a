import { useState } from 'react';

const DataInput = ({createDataItem}) => {
    const [room, setRoom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        createDataItem(room)
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