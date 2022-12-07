const DataItem = ({item, index}) => {
    console.log("data:"+item);
    return (
        <div>
            <li>{item}</li>
        </div>
    )
}

export default DataItem