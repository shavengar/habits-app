import React, { useCallback } from "react";
import { setUser } from "../redux/actions";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { connect } from "react-redux";
import vangogh from "../images/vangogh.png";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const LoginPage = ({ setUser }) => {
    const { login } = useAPI();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    let navigate = useNavigate();

    const handleLogin = useCallback(async () => {
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
        const res = await login(username, password);
        if (!res.data.success) {
            console.log(res.data.error);
        } else {
            setUser(res.data.data);
            navigate("/profile");
        }
    }, []);

    return (
        <Container className="content" maxWidth="xs">
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <img
                        src={vangogh}
                        alt="Self-portrait, Vincent van Gogh, 1887"
                        className="signInImg"
                    />
                </Grid>
                <Grid container item xs={6} spacing={6}>
                    <Grid item>Login:</Grid>
                    <FormControl variant="standard">
                        <Grid item>
                            <InputLabel htmlFor="username">
                                Username:
                            </InputLabel>
                            <Input
                                type="text"
                                id="username"
                                inputRef={usernameInput}
                            />
                        </Grid>
                    </FormControl>
                    <FormControl variant="standard">
                        <Grid item>
                            <InputLabel htmlFor="password">
                                Password:
                            </InputLabel>
                            <Input
                                type="password"
                                id="password"
                                inputRef={passwordInput}
                            />
                        </Grid>
                    </FormControl>
                    <Grid item>
                        <Button variant="outlined" onClick={handleLogin}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
