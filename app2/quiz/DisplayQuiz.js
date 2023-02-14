import {useEffect} from 'react';

const DisplayQuiz = ({quizes}) => {
    const [myQuizes, setMyQuizes] = useEffect(quizes);
    console.log("quizes");
    console.log(quizes);

    return (
        <h1>sub quizes</h1>
    )
}

export default DisplayQuiz;