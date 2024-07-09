const express = require("express");
const { Pool } = require("pg");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const pool = new Pool({
  connectionString:
    "postgres://default:xnqLSI9kFY8a@ep-ancient-cake-a1sq6ks9-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

app.get("/", (req, res) => {
  res.send("memew");
});

app.post("/newpost", (req, res) => {
  console.log(req.body);
  res.send("berhasil");
});

app.post("/newpost", (req, res) => {
  console.log(req.body);
  res.send("berhasil");
});
app.post("/newpost", (req, res) => {
  console.log(req.body);
  res.send("berhasil");
});
app.post("/newpost", (req, res) => {
  console.log(req.body);
  res.send("berhasil");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
