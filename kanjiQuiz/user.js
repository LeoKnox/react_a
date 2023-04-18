let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function confirmUser({u}, {p}) {
    alert("madzu");
    let x = Users.find((u) => u == test[0]); 
    console.log(x);
    alert(u);
    alert(Users[0].useName);
    alert("red");
    //event.preventDefault();
}