const DataField = ({i, a, oneClick}) => {
    return(
        <>
        <label>{a.a}</label>=
        <input type="Number" value={a.a} />
        <button onClick={oneClick} index={i}>red {i}</button>
        </>
    );
}

export default DataField;