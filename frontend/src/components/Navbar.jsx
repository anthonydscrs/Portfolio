import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";

export default function Navbar() {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNavMenu, setAnchorElNavMenu] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNavMenu(null);
  };

  const handleLinkHome = () => {
    navigate("/");
    setAnchorElNavMenu(null);
  };
  const handleLinkAbout = () => {
    navigate("/aboutme");
    setAnchorElNavMenu(null);
  };
  const handleLinkProjects = () => {
    navigate("/projects");
    setAnchorElNavMenu(null);
  };
  const handleLinkContact = () => {
    navigate("/contact");
    setAnchorElNavMenu(null);
  };
  const handleLinkLogin = () => {
    setAnchorElUser(null);
    navigate("/login");
  };
  const handleLinkRegister = () => {
    setAnchorElUser(null);
    navigate("/register");
  };
  const handleLogoutUser = () => {
    logoutUser();
    setAnchorElUser(null);
  };

  const handleLinkAdmin = () => {
    navigate("/admin");
    setAnchorElUser(null);
    setAnchorElNavMenu(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#101820", color: "#F2AA4C" }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <MenuItem onClick={handleLinkHome}>
            <Typography
              gutterBottom
              component="h1"
              variant="h5"
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              Anthony Discours
            </Typography>
          </MenuItem>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#F2AA4C" },
            }}
          >
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
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ p: 2, color: "#F2AA4C" }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkAbout}>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ p: 2, color: "#F2AA4C" }}
                >
                  About me
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkProjects}>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ p: 2, color: "#F2AA4C" }}
                >
                  Projects
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkContact}>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ p: 2, color: "#F2AA4C" }}
                >
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
                <Typography sx={{ ml: 1, color: "#F2AA4C" }}>Home</Typography>
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
                <Typography sx={{ ml: 1, color: "#F2AA4C" }}>
                  About me
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
                <Typography sx={{ ml: 1, color: "#F2AA4C" }}>
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
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <Typography sx={{ ml: 1, color: "#F2AA4C" }}>
                  Contact
                </Typography>
              </Box>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Espace Utilisateur">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" sx={{ maxWidth: "100%" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user.admin === 1 ? (
                <MenuItem onClick={handleLinkAdmin}>
                  <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                    Espace Admin
                  </Typography>
                </MenuItem>
              ) : null}
              {user.id ? (
                <MenuItem onClick={handleLogoutUser}>
                  <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                    Logout
                  </Typography>
                </MenuItem>
              ) : null}
              {!user.id ? (
                <MenuItem onClick={handleLinkLogin}>
                  <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                    Login
                  </Typography>
                </MenuItem>
              ) : null}
              {!user.id ? (
                <MenuItem onClick={handleLinkRegister}>
                  <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                    Register
                  </Typography>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
