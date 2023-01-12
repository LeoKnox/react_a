const createData = (createClick) => {
    return (
        <form onClick={createClick}>
            <label>x:</label>
            <input type="Number" />
            <label>y:</label>
            <input type="Number" />
            <button>Submit</button>
        </form>
    )
}

export default createData;