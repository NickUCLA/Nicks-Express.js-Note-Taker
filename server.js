const express = require("express");
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");

const PORT = 3001;

const app = express();

// Added middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// HTML ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Add notes.html path
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Get Route
app.get("/api/notes", (req, res) => {
  // res.status(200).json(currentNotes);
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(notes);
});

// Post Route
app.post("/api/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

  let newNote = req.body;
  newNote.id = uuid();

  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));

  res.json(notes);
});

// Delete Route
app.delete("/api/notes/:id", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

  let deleteId = req.params.id;

  let updateNotes = notes.filter((n) => n.id != deleteId);
  fs.writeFileSync("./db/db.json", JSON.stringify(updateNotes));

  res.json(updateNotes);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
