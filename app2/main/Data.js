import {useEffect, useState} from 'react';
import DataField from './dataField';

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
            <DataField i={i} a={a} oneClick={oneClick} />
            </>
        ))}
        </>
    );
};