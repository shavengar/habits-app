import React from "react";
import { setUser } from "../redux/actions";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const LoginPage = ({ setUser }) => {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    let navigate = useNavigate();

    const handleLogin = (props) => {
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        if (
            username.length < 4 ||
            username.length > 15 ||
            password.length < 4 ||
            password.length > 15
        ) {
            return;
        }
        setUser(username);
        navigate("/profile");
    };

    return (
        <div>
            <h3>Login:</h3>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={usernameInput} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordInput} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
