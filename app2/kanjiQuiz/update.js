import { useParams } from 'react-router-dom';
import { oneKanji } from "./kanji";

function Update() {
    const {id} = useParams();
    const single = oneKanji(id);
    console.log(single);

    return (
        <>
            <h1>One Kanji</h1>
        </>
    )
}

export default Update;