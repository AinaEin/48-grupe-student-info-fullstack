import express from "express";
import cors from "cors";
import students from './students.js';

const PORT = 4821;
const app = express();

const corsOptions = {
  origin: "http://localhost:4820",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/api/student/:id", (req, res) => {
  return res.json(students[req.params.id]);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
