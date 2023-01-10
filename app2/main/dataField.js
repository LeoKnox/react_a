const DataField = ({i, a, oneClick}) => {
    let j = 88;
    return(
        <>
        <label>{a.a}</label>=
        <input type="Number" value={a.a} />
        <button onClick={oneClick(j)} index={i}>red {i}</button>
        </>
    );
}

export default DataField;