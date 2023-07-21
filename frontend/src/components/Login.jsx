import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { useUserContext } from "../Contexts/UserContext";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Anthony Discours
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Login() {
  const { loginUser } = useUserContext();
  const [msg, setMsg] = useState("");
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    return true;
  };

  const handleLinkRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm) {
      axios
        .post(`${BACKEND_URL}/login`, userInfos, {
          withCredentials: true,
        })
        .then(({ data: user }) => {
          loginUser(user);
          navigate("/");
        })
        .catch((error) => {
          if (error.response?.status === 401) setMsg("Mauvais identifiant");
          else setMsg("Essayez plus tard.");
        });
    } else {
      setMsg("Formulaire non valide");
    }
  };

  const handleChange = (e) => {
    setUserInfos({
      ...userInfos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navbar />
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          background:
            "radial-gradient(circle, rgba(242, 170, 76, 1) 0%, rgba(16, 24, 32, 1) 100%)",
        }}
      >
        <Grid item xs={12} sm={12} md={12} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#101820" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connexion
            </Typography>
            {msg && (
              <Typography variant="body2" color="error">
                {msg}
              </Typography>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de Passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#101820",
                  color: "#F2AA4C",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Button
                    onClick={handleLinkRegister}
                    variant="text"
                    sx={{ color: "#101820" }}
                  >
                    "New here ? Create an account"
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
