let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function confirmUser(test, event) {
    event.preventDefault();
    alert("madzu");
    let y = Users.find(u => u.useName == "use1");
    let x = Users.find(u => u.useName == test[0]); 
    alert(x.password);
    alert(test[0]);
    alert(Users[0].useName);
}