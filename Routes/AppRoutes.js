const express = require("express");
const AppController = require("../Controllers/AppController");
const router = express.Router();

router.get("/appsList", AppController.getAllApps);
router.get("/:id", AppController.getAppsById); // Corrected function name

module.exports = router;
