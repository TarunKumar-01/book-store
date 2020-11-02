const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const storeRoutes = require("./routes/store");

const app = express(); //initialized express app object

//Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/store", storeRoutes);
app.use((req, res, next) => {
  //   res.status(404);
  //   res.send(`<h1>Page Not Found!!</h1>`);
  //or
  res.status(404).send(`<h1>Page Not Found!!</h1>`);
});

app.listen(5000);
