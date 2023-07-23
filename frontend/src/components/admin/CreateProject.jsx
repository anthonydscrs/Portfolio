import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProject() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const notifyCreation = () => toast.success("Nouvelle offre d'emploi posté!");
  const notifyCreationError = () =>
    toast.error("Problème lors de la publication");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    date: "",
    Htmlcss: "",
    Javascript: "",
    React: "",
    Node: "",
    Express: "",
    MySQL: "",
    picture: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitProject = (event) => {
    event.preventDefault();
    axios
      .post(
        `${BACKEND_URL}/projects`,
        { ...formData },
        { withCredentials: true }
      )
      .then(() => {
        setFormData({
          name: "",
          description: "",
          website: "",
          date: "",
          Htmlcss: "",
          Javascript: "",
          React: "",
          Node: "",
          Express: "",
          MySQL: "",
        });
        notifyCreation();
      })
      .catch((error) => {
        console.error(error);
        notifyCreationError();
      });
  };
  return (
    <Container
      component="main"
      maxWidth="xxl"
      sx={{
        pb: "3rem",
      }}
    >
      <Typography variant="h4" color="primary" sx={{ py: 4 }}>
        Création d'une nouvelle annonce
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon id="joboffer-expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Créer une nouvelle annonce</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitProject}
              sx={{
                mt: 3,
              }}
            >
              <Grid>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom du projet"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.name}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="website"
                  required
                  fullWidth
                  id="website"
                  label="Lien du site"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.website}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="description"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.description}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="Htmlcss"
                  required
                  fullWidth
                  id="Htmlcss"
                  label="Htmlcss"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.Htmlcss}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="Javascript"
                  required
                  fullWidth
                  id="Javascript"
                  label="Javascript"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.Javascript}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="React"
                  required
                  fullWidth
                  id="React"
                  label="React"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.React}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="Node"
                  required
                  fullWidth
                  id="Node"
                  label="Node"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.Node}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="Express"
                  required
                  fullWidth
                  id="Express"
                  label="Express"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.Express}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="MySQL"
                  required
                  fullWidth
                  id="MySQL"
                  label="MySQL"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.MySQL}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="date"
                  required
                  fullWidth
                  id="date"
                  label="Date"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.date}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>
              <Grid>
                <TextField
                  name="picture"
                  required
                  fullWidth
                  id="picture"
                  label="picture"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.picture}
                  sx={{ m: 1, width: 250 }}
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enregistrer
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
