const express = require("express");

const router = express.Router();

const {
  checkFeature,
} = require(
  "../controllers/featureCheckController"
);

router.post("/", checkFeature);

module.exports = router;