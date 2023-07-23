import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";

import { Navigation, Pagination, Scrollbar } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import UpdateProject from "./UpdateProject";

export default function Projects({ refreshData, setRefreshData }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [projects, setProjects] = useState();
  const [openModify, setOpenModify] = useState(null);

  const handleOpenModify = (id) => {
    setOpenModify(id);
  };

  // Function to close the update form
  const handleCloseModify = () => {
    setOpenModify(null);
  };

  const allProjects = async () => {
    const res = await axios.get(`${BACKEND_URL}/projects`);
    setProjects(res.data);
  };
  useEffect(() => {
    allProjects();
  }, []);

  const onDelete = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  const handleDelete = (id) => {
    // Delete the project from the backend
    axios
      .delete(`${BACKEND_URL}/projects/${id}`, { withCredentials: true })
      .then(() => {
        // Call the onDelete function to update the frontend
        onDelete(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    flexGrow: 1,
  }));

  const inlineStyles = {
    htmlcss: { backgroundColor: "#ff5733" },
    react: { backgroundColor: "#bad5f5" },
    javascript: { backgroundColor: "#F7DF1E" },
    node: { backgroundColor: "#68a063" },
    express: { backgroundColor: "#F2C986" },
  };

  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Stack
        sx={{ pt: 1, m: 0 }}
        display="flex"
        direction="row"
        spacing={1}
        justifyContent="center"
        minWidth="1200"
        // flexWrap="wrap"
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
            // More breakpoints...
          }}
        >
          {projects &&
            [...projects].reverse().map((project) => (
              <SwiperSlide
                item
                key={project.id}
                xs={12}
                sm={6}
                md={4}
                style={{ backgroundColor: "#101820", borderRadius: "2rem" }}
              >
                <Card
                  sx={{
                    height: "37rem",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#101820",
                    borderRadius: "2rem",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={project.picture}
                  />
                  <Box
                    sx={{
                      minHeight: "6rem",
                    }}
                  >
                    <Stack
                      spacing={{ xs: 1, sm: 2 }}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        margin: "0.5rem",
                      }}
                    >
                      {project.Htmlcss && (
                        <Item sx={inlineStyles.htmlcss}>{project.Htmlcss}</Item>
                      )}
                      {project.Javascript && (
                        <Item sx={inlineStyles.javascript}>
                          {project.Javascript}
                        </Item>
                      )}
                      {project.React && (
                        <Item sx={inlineStyles.react}>{project.React}</Item>
                      )}
                      {project.Node && (
                        <Item sx={inlineStyles.node}>{project.Node}</Item>
                      )}
                      {project.Express && (
                        <Item sx={inlineStyles.express}>{project.Express}</Item>
                      )}
                    </Stack>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ mt: "2rem", color: "#F2AA4C" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      maxWidth={900}
                      margin="auto"
                      sx={{
                        fontSize: "0.8rem",
                        marginTop: "1rem",
                        color: "#F2AA4C",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button
                      size="small"
                      href={project.github}
                      target="_blank"
                      variant="contained"
                      sx={{
                        color: "#101820",
                        backgroundColor: "#F2AA4C",
                        fontWeight: "bold",
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      href={project.website}
                      target="_blank"
                      variant="contained"
                      sx={{
                        color: "#101820",
                        backgroundColor: "#F2AA4C",
                        fontWeight: "bold",
                      }}
                    >
                      Website
                    </Button>
                    <Button onClick={() => handleDelete(project.id)}>
                      Supprimer l'offre
                    </Button>
                    <Button onClick={() => handleOpenModify(project.id)}>
                      Edit
                    </Button>

                    <Backdrop
                      open={openModify}
                      onClose={handleCloseModify}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        {/* Render the UpdateProject component in a modal */}
                        {openModify === project.id && (
                          <UpdateProject
                            project={project.id} // Pass the project data as a prop to UpdateProject
                            refreshData={refreshData}
                            setRefreshData={setRefreshData}
                            close={() => setOpenModify(null)}
                          />
                        )}
                      </Box>
                    </Backdrop>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </Stack>
    </Container>
  );
}

Projects.propTypes = {
  refreshData: PropTypes.bool.isRequired,
  setRefreshData: PropTypes.func.isRequired,
};
