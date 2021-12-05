"use strict";
module.exports = function (app) {
  var concertList = require("../controllers/concertController");

  // todoList Routes
  app.route("/concerts").get(concertList.list_all_concerts);
  /*
  app
    .route("/concert/:concertId")
    .get(concertList.read_a_concert)
    .put(concertList.update_a_concert)
    .delete(concertList.delete_a_concert);
  */
};
