const DataItem = ({item, index, deleteDataItem}) => {
    //console.log("data:"+JSON.stringify(item));
    console.log("data:"+item.room);
    return (
        <div>
            <li>{item.room}:{item.width}x{item.height}</li>
            <>
                <button onClick={() => deleteDataItem(index)}>X</button>
            </>
        </div>
    )
}

export default DataItem