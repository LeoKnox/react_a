const DataItem = ({item, index, deleteDataItem, completeDataItem}) => {
    //console.log("data:"+JSON.stringify(item));
    console.log("data:"+item.room);
    return (
        <div>
            <li>
                {item.room}:{item.width}x{item.height} &emsp;
                <button onClick={() => completeDataItem(index)}>Complete</button> &emsp;
                <button onClick={() => deleteDataItem(index)}>X</button>
            </li>
        </div>
    )
}

export default DataItem