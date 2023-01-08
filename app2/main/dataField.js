export default DataField = ({i, a, oneClick}) => {
    return(
        <>
        <p>{a.a}</p>
        <button onClick={oneClick} index={i}>red {i}</button>
        </>
    );
}