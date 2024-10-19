const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (res) => {
  res.send("Hello from the backend!");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected "))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
