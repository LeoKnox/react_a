import {useEffect, useState} from 'react';

export default data => {
    const [creation, setCreation] = (useState([{a:1, b:2}, {a:5, b:6}]))
    const oneClick = () => {
        setCreation([{a:3}]);
    }
    return (
        <>
        <h1>Much data</h1>
        {creation.map((a) => (
            <p>{a.a}</p>
        ))}
        <button onClick={oneClick}>red</button>
        </>
    );
};