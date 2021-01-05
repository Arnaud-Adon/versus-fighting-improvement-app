const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const config = require("./config");
const databaseConnexion = require("./services/connexion");
const routes = require("./routes");
const cors = require("cors");
var app = express();

app.use(bodyParser.json({ type: "*/*" }));

databaseConnexion();

app.use(cors());
app.use(morgan("common"));

const server = http.createServer(app);
routes(app);
server.listen(config.port, function () {
  console.log(`Server listen on port ${config.port}`);
});
