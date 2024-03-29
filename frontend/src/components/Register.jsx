import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlinedIcon } from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidateForm from "./ValidateForm";
import Navbar from "./Navbar";

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

export default function Register() {
  const navigate = useNavigate();
  const notifyCreation = () => toast.success("Votre compte a bien été créé !");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [validateInput, setValidateInput] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    admin: false,
    terms: false,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    // add email Validation
    const { error } = ValidateForm.validate(
      { ...formData, terms: undefined },
      {
        abortEarly: false,
        allowUnknown: true,
      }
    );
    if (error) {
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      return validationErrors;
    }
    return {};
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // The form is valid, proceed with form submission
      axios
        .post(`${BACKEND_URL}/register`, { ...formData })
        .then(() => {
          notifyCreation();
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // The form is invalid, handle validation errors
      setValidateInput({ ...validationErrors });
      console.error("Validation Errors:", validationErrors);
    }
  };

  React.useEffect(() => {
    validateForm();
  }, [handleSubmit, handleInputChange]);
  const handleLinkLogin = () => {
    navigate("/login");
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
              my: 6,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={LockOutlinedIcon} sx={{ m: 1, bgcolor: "#101820" }} />
            <Typography component="h1" variant="h5">
              Create an account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Adresse e-mail"
                    name="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                  <Box color="primary.main">{validateInput.email}</Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Mot De Passe"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleInputChange}
                    value={formData.password}
                  />
                  <Box color="primary.main">{validateInput.password}</Box>
                </Grid>
              </Grid>
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
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={handleLinkLogin}
                    variant="text"
                    sx={{ color: "#101820" }}
                  >
                    Already have an account ? Log in here
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
