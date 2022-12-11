import { useState } from 'react';

const DataInput = ({createDataItem}) => {
    const [room, setRoom] = useState("");
    const [width, setWidth] = useState(1);

    const handleSubmit = e => {
        let roomObj = {}
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        console.log("hs"+width)
        roomObj.room = room;
        roomObj.width = width;
        console.log("HHSS"+roomObj);
        createDataItem(roomObj);
        setRoom("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placehold="create room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <input type="number" placeholder="1" value={width} onChange={(e) => setWidth(e.target.value)} />
        <button onClick={handleSubmit}>Create</button>
        <div>Data input</div>
        </form>
    )
}

export default DataInput