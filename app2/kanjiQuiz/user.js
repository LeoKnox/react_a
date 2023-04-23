import { useNavigate } from 'react-router-dom';

let Users =
    [
        {useName:"use1", password:"pass1", kanjiNum:[1,3]},
        {useName:"use2", password:"pass2", kanjiNum:[2,4]},
        {useName:"use3", password:"pass3", kanjiNum:[1,5,8]}
    ]

export function singleUser(id) {
    console.log("one user"+ id);
}

export function ConfirmUser(u, p) {
    const navigate = useNavigate();
    let x = Users.find((z) => z.useName === u); 
    if (x.password === p) {
        alert(x.kanjiNum);
    }
    console.log(x);
    navigate('/logged', 1);
    //event.preventDefault();
}