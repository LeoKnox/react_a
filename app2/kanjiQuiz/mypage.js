import { showKanji } from "./kanji";

function Mypage({user}) {
    console.log("xx");
    console.log(user);
    return(
        <>
        <h3>I'm loggged in</h3>
        <p>{user}</p>
        </>
    )
}

export default Mypage;