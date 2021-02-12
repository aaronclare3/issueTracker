require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("MongoDB Connection Successful!"));

app.use(express.json());
const projectRoutes = require("./routes/project");
app.use("/projects", projectRoutes);

app.listen(4000, () => console.log("Server is up and running on port 4000!"));
