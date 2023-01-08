const DataField = ({i, a, oneClick}) => {
    return(
        <>
        <input type="Number" value={a.a} />
        <button onClick={oneClick} index={i}>red {i}</button>
        </>
    );
}

export default DataField;