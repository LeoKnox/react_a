import { confirmUser } from "./user.js";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

function Login() {
    const [u, setU] = useState("a");
    const [p, setP] = useState("p");
    return (
        <>
            <h3>Login page</h3>
            <form onClick={confirmUser()}>
                <label>User Name:</label>
                <input
                    type="text"
                    value={u}
                />
                <label>Password:</label>
                <input
                    type="text"
                    value={p}
                />
                <button>Login</button>
            </form>
            <Outlet />
        </>
    )
}

export default Login;