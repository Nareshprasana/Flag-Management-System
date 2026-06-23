const FeatureFlag = require("../models/FeatureFlag");

const createFlag = async (req, res) => {
  try {
    const { key, enabled } = req.body;

    const existingFlag = await FeatureFlag.findOne({
      key,
      organizationCode: req.user.organizationCode,
    });

    if (existingFlag) {
      return res.status(400).json({
        success: false,
        message: "Feature flag already exists",
      });
    }

    const flag = await FeatureFlag.create({
      key,
      enabled,
      organizationCode: req.user.organizationCode,
    });

    res.status(201).json({
      success: true,
      data: flag,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getFlags = async (req, res) => {
  try {
    const flags = await FeatureFlag.find({
      organizationCode: req.user.organizationCode,
    });

    res.json({
      success: true,
      data: flags,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateFlag = async (req, res) => {
  try {
    const { id } = req.params;

    const flag = await FeatureFlag.findOne({
      _id: id,
      organizationId: req.user.organizationId,
    });

    if (!flag) {
      return res.status(404).json({
        success: false,
        message: "Feature flag not found",
      });
    }

    flag.enabled = req.body.enabled;

    await flag.save();

    res.json({
      success: true,
      data: flag,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteFlag = async (req, res) => {
  try {
    const { id } = req.params;

    const flag = await FeatureFlag.findOne({
      _id: id,
      organizationCode: req.user.organizationCode,
    });

    if (!flag) {
      return res.status(404).json({
        success: false,
        message: "Feature flag not found",
      });
    }

    await FeatureFlag.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Feature flag deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createFlag,
  getFlags,
  updateFlag,
  deleteFlag,
};