import {useState} from 'react';

const DataUpdate = ({index, item, whatDataItem}) => {
    const [room, setRoom] = useState(item.room);
    const [width, setWidth] = useState(parseInt(item.width));
    const [length, setLength] = useState(item.length);

    console.log("tt"+JSON.stringify(item));
    console.log(width+"::"+whatDataItem);
    const handleSubmit = e => {
        e.preventDefault();
        setRoom(e.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Rooom:</label>
            <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
            <label type="number" value={width} onChange={(e) => setWidth(e.target.value)}>Width:</label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
            <label>Length:</label>
            <input type="text" /><br/>
            <button onClick={() => whatDataItem(index)}>Click</button>
        </form>
        </>
    )
}

export default DataUpdate;