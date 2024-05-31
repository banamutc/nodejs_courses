const path = require("path");
const express = require("express");
require("dotenv").config();
// console.log(">>> check env: ", process.env);
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routers/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// Khai bao router
app.use("/v1", webRoutes);

// test connection

// 127.0.0.1 - localhost
app.listen(port, hostname, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
