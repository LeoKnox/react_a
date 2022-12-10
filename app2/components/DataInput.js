import { useState } from 'react';

const DataInput = ({createDataItem}) => {
    const [room, setRoom] = useState("");
    const [width, setWidth] = useState(1);

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
        <input type="number" placeholder="1" value={width} />
        <button>Create</button>
        <div>Data input</div>
        </form>
    )
}

export default DataInput