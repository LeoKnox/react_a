const DataItem = ({item, index}) => {
    //console.log("data:"+JSON.stringify(item));
    console.log("data:"+item.room);
    return (
        <div>
            <li>{item.room}:{item.width}x{item.height}</li>
        </div>
    )
}

export default DataItem