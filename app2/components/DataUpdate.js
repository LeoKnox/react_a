import {useState} from 'react';

const DataUpdate = ({index, item, whatDataItem}) => {
    const [room, setRoom] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");

    console.log("tt"+JSON.stringify(item));
    console.log(index+"::"+whatDataItem);
    const handleSubmit = e => {
        e.preventDefault();
        setRoom(e.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Rooom:</label>
            <input type="text" value={item.room} onChange={(e) => setRoom(e.target.value)} />
            <label type="integer" value={item.width} onChange={(e) => setWidth(e.target.value)}>Width:</label>
            <input type="integer" value={item.length} onChange={(e) => setLength(e.target.value)} />
            <label>Length:</label>
            <input type="text" /><br/>
            <button onClick={() => whatDataItem(index)}>Click</button>
        </form>
        </>
    )
}

export default DataUpdate;