const dataUpdate = ({index, item, whatDataItem}) => {
    console.log("tt"+JSON.stringify(item));
    console.log(index+"::"+whatDataItem);
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Rooom:</label>
            <input type="text" value={item.room} />
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