const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const auth = require("../middleware/auth");

// get all projects
router.get("/", async (req, res) => {
  try {
    const project = await Project.find().populate("issues");
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get one project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("issues");
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create a project
// if user is authorized, by logging in. Check this in the auth middleware
router.post("/", auth, async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const saveProject = await project.save();
    res.status(201).json(saveProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update a project
router.patch("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (req.body.title != null) {
      project.title = req.body.title;
    }
    if (req.body.description != null) {
      project.description = req.body.description;
    }
    const saveProject = await project.save();
    res.json(saveProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
