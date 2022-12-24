const DataItem = ({item, index, whatDataItem, updateDataItem, deleteDataItem, completeDataItem}) => {
    //console.log("data:"+JSON.stringify(item));
    console.log("data:"+item.room);
    return (
        <div>
            <td>
            {item.room}
            </td>
            <td>
            {item.width}
            </td>
            <td>
            {item.height}
            </td>
            <td>
            <button onClick={() => completeDataItem(index)}>Complete</button> &emsp;
            <button onClick={() => updateDataItem(index)}>Update</button>&emsp;
            <button onClick={() => whatDataItem(index)}>What</button>&emsp;
            <button onClick={() => deleteDataItem(index)}>X</button>
            </td>
        </div>
    )
}

export default DataItem