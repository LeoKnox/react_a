import { showKanji } from "./kanji";
import { singleUser } from "./user.js";
import { useParams } from 'react-router-dom';

function Mypage({user}) {
    const { id } = useParams();
    console.log("xx");
    console.log(singleUser(0));
    return(
        <>
        <h3>I'm loggged in</h3>
        <p>{id}</p>
        </>
    )
}

export default Mypage;