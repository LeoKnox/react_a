import { useState } from 'react';

const DataInput = ({createDataItem}) => {
    const [room, setRoom] = useState("");
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);

    const handleSubmit = e => {
        let roomObj = {};
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        console.log("hs"+width)
        roomObj.room = room;
        roomObj.width = width;
        roomObj.height = height;
        console.log("HHSS"+JSON.stringify(roomObj));
        createDataItem(roomObj);
        //setRoom("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <tr>
                <td>
                <label>Room Name</label>
                <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
                </td>
                <td>
                <label>Width</label>
                <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </td>
                <td>
                <label>Height</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </td>
                <td>
                <button onClick={handleSubmit}>Create</button>
                </td>
            </tr>
        </form>
    )
}

export default DataInput