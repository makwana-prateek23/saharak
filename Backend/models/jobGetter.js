const mongoose = require("mongoose");

const jobGetterSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  Skilss: {
    type: [String],
    required: true,
  },
  experienceYears: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const JobGetter = mongoose.model("JobGetter", jobGetterSchema);

module.exports = JobGetter;
