import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return(
            <form>
                <h2 className="form-heading">Login to Conduit</h2>
                <NavLink className="a" to="/user/register"><p className="form-para">Need an account?</p></NavLink>
                <form className="auth-form">
                    <input type="email" name="email" placeholder="Enter Email Address" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <input type="submit" className="submit-btn" value="Login" />
                </form>
            </form>
        );
    }
}

export default Login;   