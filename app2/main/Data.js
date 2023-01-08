import {useEffect, useState} from 'react';

export default data => {
    const [creation, setCreation] = (useState([{a:1}, {a:5}]))
    const oneClick = () => {
        setCreation([{a:3}, {a:9}]);
    }
    return (
        <>
        <h1>Much data</h1>
        {creation.map((a, i) => (
            <>
            <p>{a.a}</p>
            <button onClick={oneClick} index={i}>red {i}</button>
            </>
        ))}
        </>
    );
};