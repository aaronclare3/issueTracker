const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const auth = require("../middleware/auth");

// get all users projects
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find()
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "comments",
          model: "Comment",
          populate: {
            path: "createdBy",
            model: "User",
          },
        },
      })
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "createdBy",
          model: "User",
        },
      });
    const usersProjects = projects.filter((proj) => proj.creator == req.user);
    res.json(usersProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all projects
router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find()
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "comments",
          model: "Comment",
          populate: {
            path: "createdBy",
            model: "User",
          },
        },
      })
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "createdBy",
          model: "User",
        },
      });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get one project
router.get("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "comments",
          model: "Comment",
          populate: {
            path: "createdBy",
            model: "User",
          },
        },
      })
      .populate({
        path: "issues",
        model: "Issue",
        populate: {
          path: "createdBy",
          model: "User",
        },
      });
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
    codeLink: req.body.codeLink,
    creator: req.user,
  });
  try {
    const saveProject = await project.save();
    res.status(201).json(saveProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update a project
router.patch("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (req.body.title != null) {
      project.title = req.body.title;
    }
    if (req.body.description != null) {
      project.description = req.body.description;
    }
    if (req.body.codeLink != null) {
      project.codeLink = req.body.codeLink;
    }
    const saveProject = await project.save();
    res.json(saveProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a project
router.delete("/:id", auth, async (req, res) => {
  try {
    let deleteProject;
    const project = await Project.findById(req.params.id);
    if (req.user == project.creator) {
      deleteProject = await Project.findByIdAndDelete(req.params.id);
      res.json(deleteProject);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
