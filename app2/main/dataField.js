const DataField = ({i, a, oneClick}) => {
    let j = i;
    return(
        <>
        <label>{a.a}</label>=
        <input type="Number" value={a.a} />
        <button onClick={oneClick(i)} index={i}>red {i}</button>
        </>
    );
}

export default DataField;