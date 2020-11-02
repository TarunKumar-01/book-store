const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  console.log("Inside Products");
  res.send(
    `<h1>Add Product</h1>
      <form action="/add-products" method="POST">
      <input type="text" name="pname"/><br>
      <input type="number" name="price"/><br>
      <input type="text" name="brand"/><br>
      <button type="submit">Add</button>
      </form>`
  );
});
router.post("/add-products", (req, res, next) => {
  res.send(req.body);
});
module.exports = router;
