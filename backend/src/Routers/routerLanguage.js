const express = require("express");

const router = express.Router();

const languageControllers = require("../controllers/languageControllers");

router.get("/languages", languageControllers.browse);
router.get("/languages/:id", languageControllers.read);
router.put("/languages/:id", languageControllers.edit);
router.post("/languages", languageControllers.add);
router.delete("/languages/:id", languageControllers.destroy);

module.exports = router;
