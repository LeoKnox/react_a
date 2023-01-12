import { useState } from 'react';

const CreateData = ({createClick}) => {
    const [myA, setA] = useState(1);
    const [myB, setB] = useState(2);

    return (
        <form onSubmit={createClick}>
            <label>x:</label>
            <input type="Number" onChange={(e) => setA(e.target.value)} />
            <label>y:</label>
            <input type="Number" onChange={(e) => setB(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default CreateData;