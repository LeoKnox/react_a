let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function confirmUser(event, test) {
    event.preventDefault();
    Users.map((u) => alert("u"));
    alert(Users[0].useName);
    return (
        <>
            <h3>ffff</h3>
        </>
    )
}