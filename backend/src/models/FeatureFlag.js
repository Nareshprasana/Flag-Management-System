const mongoose = require("mongoose");

const featureFlagSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },

    enabled: {
      type: Boolean,
      default: false,
    },

    organizationCode: {
      type: String,
      ref: "Organization",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

featureFlagSchema.index({
  key: 1,
  organizationCode: 1,
}, {
  unique: true,
});

module.exports = mongoose.model(
  "FeatureFlag",
  featureFlagSchema
);