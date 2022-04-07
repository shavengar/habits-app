import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions";
import useAPI from "../hooks/useAPI";
import vangogh from "../shared/vangogh.png";
import {
  Typography,
  Alert,
  AlertTitle,
  Button,
  TextField,
  Divider,
} from "@mui/material";

const LoginPage = ({ setUser }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [requirements, setRequirements] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { login } = useAPI();
  let navigate = useNavigate();

  const handleLogin = useCallback(async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (
      username.length < 4 ||
      username.length > 15 ||
      password.length < 4 ||
      password.length > 15
    ) {
      return setRequirements(true);
    }
    const res = await login(username, password);
    if (!res.data.success) {
      console.log(res.data.error);
      setInvalid(true);
    } else {
      setRequirements(false);
      setInvalid(false);
      setUser(res.data.data);
      navigate("/challenge");
    }
  }, []);

  return (
    <section className="entryPage displayFlex justifyCenter">
      <div className="entryContainer displayFlex justifyCenter centerAlign">
        <div className="entryFunctionality accentColor borderRadius displayFlex justifyCenter centerAlign">
          <div className="accentColor displayFlex justifyCenter column">
            <h2 className="textColor">Login:</h2>
            <TextField
              id="enterUsername"
              label="Username"
              variant="outlined"
              color="secondary"
              inputRef={usernameRef}
              sx={{ mb: 2 }}
            />
            <TextField
              id="enterPassword"
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              inputRef={passwordRef}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                handleLogin();
              }}
              sx={{ mb: 2, display: "flex", size: "large" }}
            >
              LOGIN
            </Button>
            {requirements && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <AlertTitle>Info</AlertTitle>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  Username Requirements:
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  - Must have at least 5 characters
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  - Must have fewer than 20 characters
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  Password Requirements:
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  - Must have at least 8 characters
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  - Must have fewer than 20 characters
                </Typography>
              </Alert>
            )}
            {invalid && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  Invalid username or password.
                </Typography>
              </Alert>
            )}
            <Divider>OR</Divider>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/register")}
              sx={{ mt: 2, display: "flex", size: "large" }}
            >
              CREATE NEW ACCOUNT
            </Button>
          </div>
        </div>
        <img className="entryImg borderRadius" src={vangogh} />
      </div>
    </section>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
