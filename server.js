const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8088;
const Product = require("./product");
const path = require("path");

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/productData/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    let result = await Product.findOne({ _id });
    return res.status(200).send({ msg: "success", result });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ msg: "failed", e });
  }
});

app.listen(port, () => {
  console.log("listening...");
});
