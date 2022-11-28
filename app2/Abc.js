export default function Abc(a) {
    const newClick = (index) => {
        console.log("index");
    }

    console.log(JSON.stringify(a));
    return (
        <>
        {a.a.map((b, index) => (
            <p>{b}</p>
        ))}
        </>
    )
}