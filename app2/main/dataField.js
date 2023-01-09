const DataField = ({i, a, oneClick}) => {
    return(
        <>
        <label>{a.a}</label>=
        <input type="Number" value={a.a} />
        <button onClick={console.log("i++"+i)} index={i}>red {i}</button>
        </>
    );
}

export default DataField;