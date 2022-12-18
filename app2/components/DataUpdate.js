import {useState} from 'react';

const DataUpdate = ({index, item, whatDataItem}) => {
    const [room, setRoom] = useState(item.room);
    const [width, setWidth] = useState(item.width);
    const [height, setHeight] = useState(item.Height);

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
            <label>Width:</label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            <label>Length:</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /><br/>
            <button onClick={() => whatDataItem(index)}>Click</button>
        </form>
        </>
    )
}

export default DataUpdate;