var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/concertRoutes"); //importing route
routes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
console.log("Concert RESTful API server started on: " + port);
