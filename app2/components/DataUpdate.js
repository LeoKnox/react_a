import {useState} from 'react';

const dataUpdate = ({createUpdateItem}) => {
    console.log("tt"+createUpdateItem);
    return (
        <>
        <h3>update room</h3>
        <form>
            <li>Rooom:</li>
            <input type="text" />
            <li>Width:</li>
            <input type="text" />
            <li>Length:</li>
            <input type="text" />
        </form>
        </>
    )
}

export default dataUpdate;