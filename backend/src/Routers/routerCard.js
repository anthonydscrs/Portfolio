const express = require("express");

const router = express.Router();

const cardControllers = require("../controllers/cardControllers");

router.get("/cards", cardControllers.browse);
router.get("/cards/:id", cardControllers.read);
router.put("/cards/:id", cardControllers.edit);
router.post("/cards", cardControllers.add);
router.delete("/cards/:id", cardControllers.destroy);

module.exports = router;
