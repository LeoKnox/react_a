let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function confirmUser(test) {
    alert(test[0]);
    console.log(Users.findIndex(u => u.useName === test[0]));
}