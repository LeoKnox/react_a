import { confirmUser } from "./user.js";

function Login() {
    return (
        <>
            <h3>Login page</h3>
            {confirmUser()}
        </>
    )
}

export default Login;