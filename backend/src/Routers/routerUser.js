const express = require("express");

const {
  hashPassword,
  verifyUserPassword,
  verifyToken,
  logout,
} = require("../services/auth");
const {
  getUserByEmailMiddleWare,
  register,
} = require("../controllers/authControllers");

const { validateUser } = require("../services/validator");

const routerUser = express.Router();

const userControllers = require("../controllers/userControllers");

// Routes Privées
routerUser.post("/register", validateUser, hashPassword, register);
routerUser.post("/login", getUserByEmailMiddleWare, verifyUserPassword);
routerUser.get("/logout", logout);

routerUser.get("/users", userControllers.browse);
routerUser.get("/users/:id", userControllers.read);
routerUser.put("/users/:id", userControllers.edit);
routerUser.post("/users", userControllers.add);
routerUser.delete("/users/:id", verifyToken, userControllers.destroy);

module.exports = routerUser;
