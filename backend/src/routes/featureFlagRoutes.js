const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

const {
  createFlag,
  getFlags,
  updateFlag,
  deleteFlag,
} = require(
  "../controllers/featureFlagController"
);

router.use(authMiddleware);

router.use(
  roleMiddleware("ORG_ADMIN")
);

router.post("/", createFlag);

router.get("/", getFlags);

router.put("/:id", updateFlag);

router.delete("/:id", deleteFlag);

module.exports = router;