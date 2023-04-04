import { confirmUser } from "./user.js";

function Login() {
    return (
        <>
            <h3>Login page</h3>
            <button onClick={confirmUser()}>Login</button>
        </>
    )
}

export default Login;