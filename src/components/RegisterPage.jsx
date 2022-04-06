import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import {
  Typography,
  Alert,
  AlertTitle,
  Button,
  TextField,
} from "@mui/material";

const RegisterPage = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [requirements, setRequirements] = useState(false);
  const [inUse, setInUse] = useState(false);
  const { register } = useAPI();
  const navigate = useNavigate();

  const handleRegister = useCallback(async () => {
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
    const res = await register(username, password);
    if (!res.data.success) {
      setInUse(true);
    } else {
      setRequirements(false);
      setInUse(false);
      navigate("/login");
    }
  }, []);

  return (
    <section className="entryPage displayFlex justifyCenter">
      <div className="entryContainer displayFlex justifyCenter centerAlign">
        <div className="entryFunctionality accentColor borderRadius displayFlex justifyCenter centerAlign">
          <div className="accentColor displayFlex justifyCenter column">
            <h2 className="accentColor">Register:</h2>
            <TextField
              id="createUsername"
              label="Set Username"
              variant="outlined"
              color="secondary"
              inputRef={usernameRef}
              sx={{ mb: 2 }}
            />
            <TextField
              id="createPassword"
              label="Set Password"
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
                handleRegister();
              }}
              sx={{ mb: 2, display: "flex", size: "large" }}
            >
              REGISTER
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
            {inUse && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  Username already in use.
                </Typography>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
