import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return(
        <div className="login-page">
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <Link to="/initial">
                    <button>Login</button>
                </Link>
            </form>
        </div>
    )
}

export default Login;