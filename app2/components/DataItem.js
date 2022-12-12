const DataItem = ({item, index, whatDataItem, updateDataItem, deleteDataItem, completeDataItem}) => {
    //console.log("data:"+JSON.stringify(item));
    console.log("data:"+item.room);
    return (
        <div>
            <li style={{textDecoration: item.complete ? "line-through" : ""}}>
                {item.room}:{item.width}x{item.height} &emsp;
                <button onClick={() => completeDataItem(index)}>Complete</button> &emsp;
                <button onClick={() => updateDataItem(index)}>Update</button>&emsp;
                <button onClick={() => whatDataItem(index)}>What</button>&emsp;
                <button onClick={() => deleteDataItem(index)}>X</button>
            </li>
        </div>
    )
}

export default DataItem