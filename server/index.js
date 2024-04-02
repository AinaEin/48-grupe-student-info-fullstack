import express from "express";
import cors from "cors";

const PORT = 4821;
const app = express();

const corsOptions = {
  origin: "http://localhost:4820",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/api/student", (req, res) => {
  return res.send(
    JSON.stringify({
      "students": [
        {
          "name": "Patric",
          "age": 24,
          "marks": [6, 8, 4, 9],
        },
        {
          "name": "Spongebob",
          "age": 28,
          "marks": [10, 9, 8, 7],
        },
        {
          "name": "Sandy",
          "age": 20,
          "marks": [9, 10, 10, 10],
        }
      ]
    })
  );
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
