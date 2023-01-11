const createData = (createClick) => {
    return (
        <form onClick={createClick}>
            <label>x:</label>
            <label>y:</label>
            <button>Submit</button>
        </form>
    )
}

export default createData;