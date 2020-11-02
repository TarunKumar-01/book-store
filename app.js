const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express(); //initialized express app object

//Middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-products", (req, res, next) => {
  // console.log("Inside Products");
  res.send(
    `<h1>Add Product</h1>
    <form action="/products" method="POST">
    <input type="text" name="pname"/><br>
    <input type="number" name="price"/><br>
    <input type="text" name="brand"/><br>
    <button type="submit">Add</button>`
  );
});

app.post("/products", (req, res, next) => {
  fs.writeFile("productDetails.txt", req.body.pname, (err) => {
    if (err) throw err;
    else {
      console.log("File written");
      res.send("Data sent to file");
    }
  });
  //console.log(req.body);
  //  res.send(req.body.pname);
});

app.get("/", (req, res, next) => {
  // console.log("Inside Root Path");
  res.send("<h1>Welcome</h1>");
});

app.listen(5000);
