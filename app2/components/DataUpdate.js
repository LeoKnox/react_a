import {useState} from 'react';

const dataUpdate = ({createUpdateItem}) => {
    console.log("tt"+createUpdateItem);
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