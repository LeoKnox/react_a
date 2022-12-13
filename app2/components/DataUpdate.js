import {useState} from 'react';

const dataUpdate = ({createUpdateItem,aaa}) => {
    console.log("tt"+createUpdateItem);
    console.log(JSON.stringify(aaa));
    return (
        <>
        <form>
            <label>Rooom:</label>
            <input type="text" />
            <label>Width:</label>
            <input type="text" />
            <label>Length:</label>
            <input type="text" /><br/>
        </form>
        </>
    )
}

export default dataUpdate;