const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// Getting all
router.get("/", async (req, res) => {
  // res.send("get all");
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
