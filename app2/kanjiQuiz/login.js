import { confirmUser } from "./user.js";
import { Outlet } from 'react-router-dom';

function Login() {
    return (
        <>
            <h3>Login page</h3>
            <button onClick={confirmUser()}>Login</button>
            <Outlet />
        </>
    )
}

export default Login;