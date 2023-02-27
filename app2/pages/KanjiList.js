import {Outlet} from 'react-router-dom';
import One from './One.js';

function KanjiList() {
    return (
        <>
        <p>List of Kanji</p>
        <Outlet />
        </>
    )
}

export default KanjiList;