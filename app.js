const express = require("express");
const path = require("node:path");
const app = express();
const newRouter = require("./routes/new")
app.use(express.urlencoded({ extended: true }));


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


  app.get("/new", (req, res) => {
    res.render("form");
  });

  app.post('/new', (req, res) => {
    res.send()
    req.body.text()
    req.body.user()
    messages.push({ text: text, user: uer, added: new Date() });
    res.redirect("/")
  })


  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`My Message Board App - listening on port ${PORT}!`);
  });