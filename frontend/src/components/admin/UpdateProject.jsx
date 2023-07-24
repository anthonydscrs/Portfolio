import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import APIservice from "../../services/APIservice";

export default function UpdateProject({ project, open, onClose }) {
  const notifyCreation = () => toast("Votre compte a bien été modifié !");
  const notifyCreationError = () => toast("Erreur lors de la Modification");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: `${project.name}`,
    description: `${project.description}`,
    website: `${project.website}`,
    picture: `${project.picture}`,
    github: `${project.github}`,
    date: `${project.date}`,
    Htmlcss: `${project.Htmlcss}`,
    Javascript: `${project.Javascript}`,
    React: `${project.React}`,
    Node: `${project.Node}`,
    Express: `${project.Express}`,
    MySQL: `${project.MySQL}`,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    APIservice.put(`${BACKEND_URL}/projects/${project.id}`, { ...formData })
      .then(() => {
        notifyCreation();
        setFormData({
          name: `${project.name}`,
          description: `${project.description}`,
          website: `${project.website}`,
          picture: `${project.picture}`,
          github: `${project.github}`,
          date: `${project.date}`,
          Htmlcss: `${project.Htmlcss}`,
          Javascript: `${project.Javascript}`,
          React: `${project.React}`,
          Node: `${project.Node}`,
          Express: `${project.Express}`,
          MySQL: `${project.MySQL}`,
        });
      })
      .catch((err) => {
        console.error(err);
        notifyCreationError();
      });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ position: "relative" }}>
        <Paper elevation={4} sx={{ p: 2 }}>
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="text.primary">
            Mise à jour du projet
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="description"
                  name="description"
                  required
                  fullWidth
                  id="description"
                  label="description"
                  autoFocus
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  label="picture"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="github"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.github}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Htmlcss"
                  name="Htmlcss"
                  required
                  fullWidth
                  id="Htmlcss"
                  label="Htmlcss"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="Javascript"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="React"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="Node"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="Express"
                  autoFocus
                  onChange={handleInputChange}
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
                  label="MySQL"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.MySQL}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="date"
                  name="date"
                  required
                  fullWidth
                  id="date"
                  label="date"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.date}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              color="success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enregistrer
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
}

UpdateProject.propTypes = {
  project: PropTypes.shape.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
