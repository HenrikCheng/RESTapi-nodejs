const express = require("express");
const router = express.Router();

// Getting all
router.get("/", (req, res) => {
  res.send("get all");
});

// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating one
router.post("/", (req, res) => {
  res.send("create one");
});

// Updating one
router.patch("/:id", (req, res) => {
  res.send(req.params.id);
});

// Deleting one
router.delete("/:id", (req, res) => {
  res.send("delete one");
});

module.exports = router;
