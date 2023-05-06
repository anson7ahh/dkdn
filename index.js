const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const accountModel = require("./module/mongodb.js");
const path = require("path");

const wed = require("./controller/router.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
wed(app);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
