import { confirmUser } from "./user.js";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

function Login() {
    const [u, setU] = useState("");
    const [p, setP] = useState("");
    const [user, setUser] = useState({});

    const handleChange = (event) => {
        const name = event.target.u;
        const pass = event.target.p;
        setUser(values => ({...values, [name]: pass}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
    }
    return (
        <>
            <h3>Login page</h3>
            <form onClick={() => handleSubmit}>
                <label>User Name:</label>
                <input
                    type="text"
                    name="username"
                    value={user.u}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    value={user.p}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
            <Outlet />
        </>
    )
}

export default Login;