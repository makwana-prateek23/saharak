const express = require("express");

const router = express.Router();

const JobGetter = require("./models/jobGetter");

router.post("/job-getters", async (req, res) => {
  try {
    const jobGetter = new JobGetter(req.body);
    await jobGetter.save();
    res.status(201).json(jobGetter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
   