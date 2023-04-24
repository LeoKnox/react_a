import { showKanji } from "./kanji";
import { useState} from "react";
import { singleUser } from "./user.js";
import { useParams } from 'react-router-dom';

function Mypage({user}) {
    const { id } = useParams();
    console.log("xx");
    const [myInfo] = useState(singleUser(id));
    return(
        <>
        <h3>I'm loggged in</h3>
        <p>Welcome {myInfo.useName}</p>
        </>
    )
}

export default Mypage;