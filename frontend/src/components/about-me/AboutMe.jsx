import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Css from "../../assets/css.svg";
import Git from "../../assets/git.svg";
import GitHub from "../../assets/github.svg";
import React from "../../assets/react.svg";
import Javascript from "../../assets/javascript.svg";
import Html from "../../assets/html.svg";
import NodeJS from "../../assets/node-js.svg";
import MySQL from "../../assets/mysql.svg";
import Express from "../../assets/express.svg";
import Figma from "../../assets/figma.svg";
import Trello from "../../assets/trello.svg";
import Agile from "../../assets/agile.png";

const front = [
  { name: "HTML", image: Html },
  { name: "CSS", image: Css },
  { name: "Javascript", image: Javascript },
  { name: "ReactJS", image: React },
];

const back = [
  { name: "NodeJS", image: NodeJS },
  { name: "ExpressJS", image: Express },
  { name: "MySQL", image: MySQL },
];

const tools = [
  { name: "Git", image: Git },
  { name: "GitHub", image: GitHub },
  { name: "Figma", image: Figma },
  { name: "Trello", image: Trello },
  { name: "Agile", image: Agile },
];

export default function AboutMe() {
  return (
    <Container>
      <Card
        sx={{ backgroundColor: "#101820", borderRadius: "1rem", mt: "3rem" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#F2AA4C",
              mb: "1rem",
              fontFamily: "Montserrat",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#F2AA4C",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
            }}
          >
            My name is Anthony, web developper from Wild Code School. After many
            years working in retails and sales, today, I developp website. I
            started my to practice at the end of 2022 by myself before joining
            my school during 5 months. Now I am looking to improve my skills and
            I want to continue with a 1 year work-study apprenticeship contract.
            I am open to all languages.
          </Typography>
        </CardContent>
      </Card>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "1rem",
          mt: "3rem",
          "@media (min-width: 768px)": {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
        }}
      >
        <Card sx={{ backgroundColor: "#101820", borderRadius: "1rem" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#F2AA4C", mb: "1rem" }}
            >
              Front End
            </Typography>
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 360,
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              {front.map((value) => {
                return (
                  <ListItem
                    key={value.id}
                    disablePadding
                    sx={{
                      justifyContent: " center",
                      textAlign: "center",
                      alignItems: "center",
                      mb: "1rem",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={value.name}
                        src={value.image}
                        sx={{ height: "100%", width: "100%" }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={value.name}
                      sx={{ color: "#F2AA4C" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#101820", borderRadius: "1rem" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#F2AA4C", mb: "1rem" }}
            >
              Back End
            </Typography>
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 360,
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              {back.map((value) => {
                return (
                  <ListItem
                    key={value.id}
                    disablePadding
                    sx={{
                      justifyContent: " center",
                      textAlign: "center",
                      alignItems: "center",
                      mb: "1rem",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={value.name}
                        src={value.image}
                        sx={{ height: "100%", width: "100%", mr: "1rem" }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={value.name}
                      sx={{ color: "#F2AA4C" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#101820", borderRadius: "1rem" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#F2AA4C", mb: "1rem" }}
            >
              Tools
            </Typography>
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 360,
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              {tools.map((value) => {
                return (
                  <ListItem
                    key={value.id}
                    disablePadding
                    sx={{
                      justifyContent: " center",
                      textAlign: "center",
                      alignItems: "center",
                      mb: "1rem",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={value.name}
                        src={value.image}
                        sx={{ height: "100%", width: "100%", mr: "1rem" }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={value.name}
                      sx={{ color: "#F2AA4C" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
