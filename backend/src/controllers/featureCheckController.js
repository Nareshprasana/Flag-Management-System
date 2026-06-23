const FeatureFlag = require("../models/FeatureFlag");

const checkFeature = async (req, res) => {
  try {
    const { organizationCode, featureKey } =
      req.body;

    const flag =
      await FeatureFlag.findOne({
        organizationCode,
        key: featureKey,
      });

    if (!flag) {
      return res.json({
        success: true,
        enabled: false,
      });
    }

    return res.json({
      success: true,
      enabled: flag.enabled,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  checkFeature,
};