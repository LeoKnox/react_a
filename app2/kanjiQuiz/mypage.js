import { showKanji } from "./kanji";

function Mypage({user}) {
    console.log("xx");
    console.log(user);
    return(
        <>
        <h3>I'm loggged in</h3>
        {user.kanjiNum.map((uk) => (
            <p>{uk}</p>
        ))}
        </>
    )
}

export default Mypage;