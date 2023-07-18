import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [anchorElNavMenu, setAnchorElNavMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNavMenu(null);
  };

  const handleLinkHome = () => {
    navigate("/");
  };
  const handleLinkAbout = () => {
    navigate("/aboutme");
  };
  const handleLinkProjects = () => {
    navigate("/projects");
  };
  const handleLinkContact = () => {
    navigate("/contact");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#001233" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <MenuItem onClick={handleLinkHome}>
            <Typography sx={{ display: { xs: "none", lg: "flex" } }}>
              Anthony Discours
            </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="NavMenu"
              anchorEl={anchorElNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNavMenu)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleLinkHome}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkAbout}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkProjects}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Projects
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkContact}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              pl: 5,
              flexGrow: 3,
            }}
          >
            <Button
              onClick={handleLinkHome}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                  },
                  pl: 5,
                }}
              >
                <Typography sx={{ ml: 1, color: "#cac0b3" }}>
                  Accueil
                </Typography>
              </Box>
            </Button>

            <Button
              onClick={handleLinkAbout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <Typography sx={{ ml: 1, color: "#cac0b3" }}>
                  Annonces
                </Typography>
              </Box>
            </Button>
            <Button
              onClick={handleLinkProjects}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <Typography sx={{ ml: 1, color: "#cac0b3" }}>
                  Projects
                </Typography>
              </Box>
            </Button>
            <Button
              onClick={handleLinkContact}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                  },
                  pl: 5,
                }}
              >
                <Typography sx={{ ml: 1, color: "#cac0b3" }}>
                  Contact
                </Typography>
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
