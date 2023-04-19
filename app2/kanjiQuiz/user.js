let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function confirmUser(u, p, event) {
    let x = Users.find((z) => z.useName == u); 
    if (x.password === p) {
        alert("you win");
    }
    console.log(x);
    //event.preventDefault();
}