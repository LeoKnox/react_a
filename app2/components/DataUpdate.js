const dataUpdate = ({index, item, whatDataItem}) => {
    console.log("tt"+whatDataItem);
    //console.log(JSON.stringify(aaa));
    return (
        <>
        <form>
            <label>Rooom:</label>
            <input type="text" />
            <label>Width:</label>
            <input type="text" />
            <label>Length:</label>
            <input type="text" /><br/>
            <button onClick={() => whatDataItem(index)}>Click</button>
        </form>
        </>
    )
}

export default dataUpdate;