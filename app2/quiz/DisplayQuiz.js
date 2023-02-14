import {useState} from 'react';

const DisplayQuiz = ({quizes}) => {
    const [myQuizes, setMyQuizes] = useState(quizes);
    console.log("quizes");
    console.log(myQuizes);

    return (
        <h1>sub quizes</h1>
    )
}

export default DisplayQuiz;