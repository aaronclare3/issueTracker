require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("MongoDB Connection Successful!"));

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

const projectRoutes = require("./routes/project");
const issueRoutes = require("./routes/issue");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
app.use("/projects", projectRoutes);
app.use("/comments", commentRoutes);
app.use("/issues", issueRoutes);
app.use("/users", userRoutes);

app.listen(4000, () => console.log("Server is up and running on port 4000!"));
