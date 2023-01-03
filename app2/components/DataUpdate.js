import {useState} from 'react';

const DataUpdate = ({index, item, whatDataItem}) => {
    const [room, setRoom] = useState(item.room);
    const [width, setWidth] = useState(item.width);
    const [height, setHeight] = useState(item.height);

    //console.log("tt"+JSON.stringify(item));
    //console.log(width+"::"+whatDataItem);
    const handleUpdate = () =>{
        let updateObj = {};
        updateObj.room = room;
        updateObj.width = width;
        updateObj.height = height;
        //console.log("obj" + updateObj);
        whatDataItem(updateObj, index);
    }

    return (
        <>
        <form onSubmit={handleUpdate}>
            <td>
            <label>Rooom: </label>
            <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
            </td>
            <td>
            <label>Width: </label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            </td>
            <td>
            <label>Length: </label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /><br/>
            </td>
            <td>
            <button onClick={handleUpdate}>Click</button>
            </td>
        </form>
        </>
    )
}

export default DataUpdate;