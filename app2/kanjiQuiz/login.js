import { confirmUser } from "./user.js";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

function Login() {
    const [u, setU] = useState("");
    const [p, setP] = useState("");
    const [user, setUser] = useState([]);

    const handleChange = (event) => {
        let name = event.target.u;
        let pass = event.target.p;
        console.log(name);
        console.log(pass);
        setUser([name, pass]);
        console.log(user);
    }

    function handleSubmit(event) {
        //alert(JSON.stringify(user));
        alert(user.pass);
        confirmUser(user.pass);
    }
    return (
        <>
            <h3>Login page</h3>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input
                    type="text"
                    name="username"
                    value={user[0]}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    value={user[1]}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
            <Outlet />
        </>
    )
}

export default Login;