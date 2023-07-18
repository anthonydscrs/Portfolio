import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Css from "../../assets/css.svg";
import Git from "../../assets/git.svg";
import Github from "../../assets/github.svg";
import React from "../../assets/react.svg";
import Javascript from "../../assets/javascript.svg";
import Html from "../../assets/html.svg";
import NodeJS from "../../assets/node-js.svg";
import MySQL from "../../assets/mysql.svg";
import Express from "../../assets/express.svg";
import Figma from "../../assets/figma.svg";
import Trello from "../../assets/trello.svg";
import Agile from "../../assets/agile.png";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <Container sx={{ mt: "2rem" }}>
      <Card sx={{ backgroundColor: "#001233", borderRadius: "1rem" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#D9E0EF" }}
          >
            About Me
          </Typography>
          <Typography variant="body2" sx={{ color: "#cac0b3" }}>
            My name is Anthony, web developper from Wild Code School. After many
            years working in retails and sales, today, I developp website. I
            started my to practice at the end of 2022 by myself before joining
            my school during 5 months. Now I am looking to improve my skills and
            I want to continue with a 1 year work-study apprenticeship contract.
            I am open to all languages.
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          backgroundColor: "#001233",
          mt: "3rem",
          borderRadius: "1rem",
          height: "30rem",
        }}
      >
        <div className={styles.containerSkillsText}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#D9E0EF" }}
          >
            {" "}
            Developper tools
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: "#D9E0EF" }}>Front-End Tools</Typography>
            <CardContent sx={{ backgroundColor: "#B3DDF9" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Html}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Css}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Javascript}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={React}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Typography sx={{ color: "#D9E0EF" }}>Back-End Tools</Typography>
            <CardContent
              sx={{ backgroundColor: "#B3DDF9", borderRadius: "1rem" }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={NodeJS}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={MySQL}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Express}
                    sx={{ maxWidth: "70px", maxHeight: "70px" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Typography sx={{ color: "#D9E0EF" }}>General Tools</Typography>
            <CardContent sx={{ backgroundColor: "#B3DDF9" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Git}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Github}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Figma}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Agile}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Trello}
                    sx={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </div>
      </Card>
    </Container>
  );
}
