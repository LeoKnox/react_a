import { confirmUser } from "./user.js";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

function Login() {
    const [u, setU] = useState("");
    const [p, setP] = useState("");
    const [user, setUser] = useState([]);

    const handleChange = (event) => {
        if (event.target.name === "username") {
            console.log("user !!!!");
            setU(event.target.value);
        }
        if (event.target.name === "password") {
            console.log("pass !!!!");
            setP(event.target.value);
        }
        let pass = event.target.value;
        console.log(u);
        console.log(user)
        setUser([u, p]);
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
                    value={u}
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