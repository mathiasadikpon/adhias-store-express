const express = require("express");
const router = express.Router();

router
  .route("/")
  .all((req, res, next) => {})
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

router
  .route("/:id")
  .all((req, res, next) => {})
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
