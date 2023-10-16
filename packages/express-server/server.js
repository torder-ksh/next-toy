const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const router = require("./route/index.js");
// 몽구스 연결
const mongoose = require("mongoose");

// CORS 설정
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect("mongodb+srv://admin:admin123@cluster0.bfnoupv.mongodb.net/express")
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });

// RESTful API route for DB
app.use("/", router);

const PORT = 3065;
app.listen(PORT, () => {
  console.log("express server running in 3065 port !");
});
