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
});
