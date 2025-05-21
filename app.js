const express = require("express");
const path = require("node:path");
const app = express();

// ✅ This must be outside the route
let ID = 2
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date(), ID: ID-1},
  { text: "Hello World!", user: "Charles", added: new Date(), ID: ID },
];

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// GET homepage
app.get("/", (req, res) => {
  res.render("index", { messages });
});

// GET new message form
app.get("/new", (req, res) => {
  res.render("form");
});

// ✅ POST new message
app.post("/new", (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  console.log('Message posted')
  ID++
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My Message Board App - listening on port ${PORT}!`);
});