"use strict";
require("dotenv").config();
const Sequelize = require("sequelize-cockroachdb");
const fs = require("fs");
//
//  Task = mongoose.model('Tasks');
// Define the Concert model for the "concerts" table.

// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "frank",
  password: process.env.PASS,
  host: "free-tier4.aws-us-west-2.cockroachlabs.cloud",
  port: 26257,
  database: "moist-falcon-1476.concerts",
  dialectOptions: {
    ssl: {
      //For secure connection:
      rejectUnauthorized: false,
      /*ca: fs
        .readFileSync("C:/Users/Admin/AppData/Roaming/.postgresql/root.crt")
        .toString(),
      */
    },
  },
  logging: false,
});

const Concert = sequelize.define("concerts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
  },
  dayOfWeek: {
    type: Sequelize.STRING,
  },
  venue: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.STRING,
  },
  genres: {
    type: Sequelize.STRING,
  },
});

exports.list_all_concerts = function (req, res) {
  Concert.findAll()
    .then(function (concerts) {
      /*concerts.forEach(function (concert) {
      console.log(concert.id + " " + concert.name + " " + concert.date);
    });
    process.exit(0);
    */
      res.json(concerts);
    })
    .catch(function (err) {
      res.send(err);
    });
};
/*
exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_a_task = function (req, res) {
  Task.remove(
    {
      _id: req.params.taskId,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};
*/
