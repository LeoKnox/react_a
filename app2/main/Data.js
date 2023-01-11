import {useEffect, useState} from 'react';
import DataField from './dataField';

export default data => {
    const [creation, setCreation] = (useState([{a:1, b:4}, {a:5, b: 6}]))
    const oneClick = (index) => {
        setCreation([{a:index}, {a:9}]);
    }
    return (
        <>
        <h1>Much data</h1>
        {creation.map((a, i) => (
            <>
            <DataField i={i} a={a} />
            </>
        ))}
        </>
    );
};