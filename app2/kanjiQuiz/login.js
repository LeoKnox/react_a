import { ConfirmUser } from "./user.js";
import { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [u, setU] = useState("");
    const [p, setP] = useState("");
    const [user, setUser] = useState();

    const handleChange = (event) => {
        if (event.target.name === "username") {
            console.log("user !!!!");
            setU(event.target.value);
        }
        if (event.target.name === "password") {
            console.log("pass !!!!");
            setP(event.target.value);
        }
    }

    function handleSubmit(event) {
        //setUser({u:u, p:p});
        console.log("user");
        console.log(u);
        confirmUser(u, p);
        navigate('/logged', "red");
        //confirmUser(user);
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
                    value={p}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
            <Outlet />
        </>
    )
}

export default Login;