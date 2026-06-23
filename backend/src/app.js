const express = require("express");
const cors = require("cors");

const superAdminRoutes = require(
  "./routes/superAdminRoutes"
);

const organizationRoutes = require(
  "./routes/organizationRoutes"
);

const authRoutes = require(
  "./routes/authRoutes"
);

const featureFlagRoutes = require(
  "./routes/featureFlagRoutes"
);

const featureCheckRoutes = require(
  "./routes/featureCheckRoutes"
);

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/feature-flags",
  featureFlagRoutes
);

app.use(
  "/api/super-admin",
  superAdminRoutes
);

app.use(
  "/api/check-feature",
  featureCheckRoutes
);

app.use(
  "/api/organizations",
  organizationRoutes
);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Feature Flag API Running",
  });
});

module.exports = app;