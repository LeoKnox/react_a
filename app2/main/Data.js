import {useEffect, useState} from 'react';
import DataField from './dataField';
import CreateData from './createData.js';

export default data => {
    const [creation, setCreation] = (useState([{a:1, b:4}, {a:5, b: 6}]))
    const oneClick = (index) => {
        setCreation([{a:index}, {a:9}]);
    }
    function createClick(x) {
        let inputData = creation;
        inputData.push({a:8,b:9});
        alert(JSON.stringify(x));
        return(setCreation(inputData));
        alert(JSON.stringify(creation));
    }
    return (
        <>
        <h1>Much data</h1>
        {creation.map((a, i) => (
            <>
            <DataField i={i} a={a} />
            </>
        ))}
        <CreateData createClick={createClick} />
        </>
    );
};