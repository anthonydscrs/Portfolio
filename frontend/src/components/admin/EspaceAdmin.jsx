import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CreateProject from "./CreateProject";
import ProjectCard from "./ProjectCard";

export default function EspaceAdmin() {
  return (
    <Container maxWidth="xxl" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Espace Pro
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={12} lg={7} elevation={3}>
          <CreateProject />
        </Grid>
        <Grid item xs={12} lg={7} elevation={3}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Container>
  );
}
