import { useState } from 'react';

const DataInput = ({createRoom}) => {
    const [room, setRoom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (room === "") {
            return console.log("add some rooms")
        }
        DataInput(room)
        setRoom("");
    }

    return (
        <div>Data input</div>
    )
}

export default DataInput