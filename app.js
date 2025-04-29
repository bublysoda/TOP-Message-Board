const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


  
  app.get("/", (req, res) => {
    const messages = [
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
    ];
    res.render("index", {messages:messages});
  });

express.Router.get("/new", (req, res) => {
  res.render("form", )
})

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`My Message Board App - listening on port ${PORT}!`);
  });