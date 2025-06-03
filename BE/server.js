const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const login_logout = require("./Router/login_logout");
const contacts = require("./Router/contacts");
const groups = require("./Router/groups");

const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/images", express.static("images"));

app.use("/app/Contacts", contacts);
app.use("/app/Groups", groups);
app.use("/", login_logout);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
