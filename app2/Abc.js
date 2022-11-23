export default function Abc({a}) {
    console.log(JSON.stringify(a));
    return (
        <>
        {a.map((b) => (
            <p>{b}</p>
        ))}
        </>
    )
}