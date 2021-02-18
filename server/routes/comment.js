const express = require("express");
const router = express.Router();
const Issue = require("../models/issue");
const Comment = require("../models/comment");
const auth = require("../middleware/auth");

// create a comment
router.post("/", auth, async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    issue: req.body.issue,
    createdBy: req.user,
  });
  try {
    const saveComment = await comment.save();
    const getIssue = await Issue.findById(saveComment.issue);
    getIssue.comments.push(saveComment);
    getIssue.save();
    res.status(201).json(saveComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
