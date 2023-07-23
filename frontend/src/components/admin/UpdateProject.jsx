import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import Container from "@mui/material/Container";
import { useUserContext } from "../../Contexts/UserContext";
import instance from "../../services/APIservice";

function UpdateProject({ close, refreshData, setRefreshData, id }) {
  const notifyCreation = () => toast("Le projet a bien été modifié !");

  const { logout } = useUserContext();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    website: "",
    picture: "",
    github: "",
    date: "",
    Htmlcss: "",
    Javascript: "",
    React: "",
    Node: "",
    Express: "",
    MySQL: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    instance
      .get(`/projects/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          logout(true);
        }
        if (err.response.status === 500) console.error(err);
      });
  }, []);

  const handleSubmit = () => {
    instance
      .put(`/projects/${id}`, formData)
      .then((response) => {
        if (response.status === 200) {
          notifyCreation();
        }
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          logout(true);
        }
        if (err.response.status === 500) console.error(err);
      });
  };

  const handleButtonClick = () => {
    handleSubmit();
    close();
    setRefreshData(!refreshData);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ p: 2 }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ ml: 2, mt: 3, mb: 2 }}
        >
          <Grid container spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom de l'entreprise"
                  autoFocus
                  onChange={handleChange}
                  value={formData.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Nom du description"
                  name="description"
                  autoComplete="description"
                  onChange={handleChange}
                  value={formData.description}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="website"
                  name="website"
                  required
                  fullWidth
                  id="website"
                  label="website"
                  autoFocus
                  onChange={handleChange}
                  value={formData.website}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="picture"
                  name="picture"
                  required
                  fullWidth
                  id="picture"
                  label="Image"
                  autoFocus
                  onChange={handleChange}
                  value={formData.picture}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="github"
                  name="github"
                  required
                  fullWidth
                  id="github"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.github}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="date"
                  name="date"
                  required
                  fullWidth
                  id="date"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.date}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Htmlcss"
                  name="Htmlcss"
                  required
                  fullWidth
                  id="Htmlcss"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.Htmlcss}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Javascript"
                  name="Javascript"
                  required
                  fullWidth
                  id="Javascript"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.Javascript}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="React"
                  name="React"
                  required
                  fullWidth
                  id="React"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.React}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Node"
                  name="Node"
                  required
                  fullWidth
                  id="Node"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.Node}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Express"
                  name="Express"
                  required
                  fullWidth
                  id="Express"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.Express}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="MySQL"
                  name="MySQL"
                  required
                  fullWidth
                  id="MySQL"
                  label="Votre Ville"
                  autoFocus
                  onChange={handleChange}
                  value={formData.MySQL}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="success"
            variant="contained"
            onClick={handleButtonClick}
            sx={{ mt: 3, mb: 2 }}
          >
            Enregistrer
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default UpdateProject;

UpdateProject.propTypes = {
  close: PropTypes.func.isRequired,
  refreshData: PropTypes.bool.isRequired,
  setRefreshData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
