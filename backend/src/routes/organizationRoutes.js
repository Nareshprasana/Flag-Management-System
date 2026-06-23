const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

const {
  createOrganization,
  getOrganizations,
} = require(
  "../controllers/organizationController"
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  createOrganization
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getOrganizations
);

module.exports = router;