const express = require("express");

const router = express.Router();

const { validateProjectUpdate } = require("../services/validator");

const projectControllers = require("../controllers/projectControllers");

// Route for fetching all projects

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", validateProjectUpdate, projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

module.exports = router;
