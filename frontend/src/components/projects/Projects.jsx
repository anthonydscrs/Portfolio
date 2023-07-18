import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Navigation, Pagination, Scrollbar } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import P2 from "../../assets/P2.jpg";
import P1 from "../../assets/P1.png";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

const data = [
  {
    project: "Project X",
    htmlcss: "HTML/CSS",
    react: "React.js",
    javascript: "Javascript",
    node: "Node.JS",
    express: "Express.JS",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    image: [P2],
    status: "In Development",
  },
  {
    project: "Project XYZ",
    react: "react",
    javascript: "javascript",
    node: "node",
    express: "express",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    needs: "People with super powers, semi-super powers, or no powers at all",
    image: [P1],
    status: "Live",
  },
  {
    project: "Project X",
    htmlcss: "HTML/CSS",
    react: "react",
    javascript: "javascript",
    node: "node",
    express: "express",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
    needs: "People with super powers",
    status: "In Development",
  },
  {
    project: "Project XYZ",
    htmlcss: "HTML/CSS",
    react: "react",
    javascript: "javascript",
    node: "node",
    express: "express",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    needs: "People with super powers, semi-super powers, or no powers at all",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
    status: "Live",
  },
  {
    project: "Project X",
    htmlcss: "HTML/CSS",
    react: "React.js",
    javascript: "Javascript",
    node: "Node.js",
    express: "Express.js",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
    needs: "People with super powers",
    status: "In Development",
  },
  {
    project: "Project XYZ",
    htmlcss: "HTML/CSS",
    react: "react",
    javascript: "javascript",
    node: "node",
    express: "express",
    description:
      "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
    website: "https://www.google.com",
    github: "https://www.github.com",
    needs: "People with super powers, semi-super powers, or no powers at all",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
    status: "Live",
  },
];

export default function Projects() {
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
    <Container sx={{ marginTop: "2rem" }}>
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
          {data &&
            data.map((projects) => (
              <SwiperSlide
                item
                key={projects.projects}
                xs={12}
                sm={6}
                md={4}
                style={{ backgroundColor: "#ff595a" }}
              >
                <Card
                  sx={{
                    height: "37rem",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ff595a",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={projects.image}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        minHeight: "6rem",
                      }}
                    >
                      <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                        }}
                      >
                        {projects.htmlcss && (
                          <Item sx={inlineStyles.htmlcss}>
                            {projects.htmlcss}
                          </Item>
                        )}
                        {projects.javascript && (
                          <Item sx={inlineStyles.javascript}>
                            {projects.javascript}
                          </Item>
                        )}
                        {projects.react && (
                          <Item sx={inlineStyles.react}>{projects.react}</Item>
                        )}
                        {projects.node && (
                          <Item sx={inlineStyles.node}>{projects.node}</Item>
                        )}
                        {projects.express && (
                          <Item sx={inlineStyles.express}>
                            {projects.express}
                          </Item>
                        )}
                      </Stack>
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ mt: "2rem" }}
                    >
                      {projects.project}
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
                        color: "#001233",
                      }}
                    >
                      {projects.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button
                      size="small"
                      href={projects.website}
                      sx={{ color: "#001233", fontWeight: "bold" }}
                    >
                      Website
                    </Button>
                    <Button
                      size="small"
                      href={projects.github}
                      target="_blank"
                      sx={{ color: "#001233", fontWeight: "bold" }}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      href={projects.github}
                      target="_blank"
                      sx={{
                        color: "#001233",
                        fontWeight: "bold",
                      }}
                    >
                      More pictures
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </Stack>
    </Container>
  );
}
