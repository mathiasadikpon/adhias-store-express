const express = require("express");
const router = express.Router();

router
  .route("/")
  .all((req, res, next) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
