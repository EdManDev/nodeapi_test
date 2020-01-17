const express = require("express");
const app = express();
const morgan = require("morgan");

// bring  in Routes
const { getPosts } = require("./routes/post");

// middleware
app.use(morgan("dev"));
app.use("/", getPosts);

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
