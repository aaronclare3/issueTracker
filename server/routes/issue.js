const express = require("express");
const router = express.Router();
const Issue = require("../models/issue");
const Project = require("../models/project");

// create an issue

router.post("/", async (req, res) => {
  const issue = new Issue({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    project: req.body.project,
  });
  try {
    const saveIssue = await issue.save();
    const getProject = await Project.findById(saveIssue.project);
    getProject.issues.push(saveIssue);
    getProject.save();
    res.status(201).json(saveIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update an issue
router.patch("/:id", async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (req.body.title != null) {
      issue.title = req.body.title;
    }
    if (req.body.description != null) {
      issue.description = req.body.description;
    }
    if (req.body.priority != null) {
      issue.priority = req.body.priority;
    }
    if (req.body.status != null) {
      issue.status = req.body.status;
    }
    const saveIssue = await issue.save();
    res.json(saveIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete an issue
router.delete("/:id", async (req, res) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);
    res.json(issue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
