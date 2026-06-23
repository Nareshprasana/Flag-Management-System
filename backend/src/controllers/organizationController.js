const Organization = require("../models/Organization");

const createOrganization = async (req, res) => {
  try {
    const { name, organizationCode } = req.body;

    const existingOrg = await Organization.findOne({
      name,
    });

    if (existingOrg) {
      return res.status(400).json({
        success: false,
        message: "Organization already exists",
      });
    }

    const organization =
      await Organization.create({
        name,
        organizationCode,
      });

    res.status(201).json({
      success: true,
      data: organization,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getOrganizations = async (
  req,
  res
) => {
  try {
    const organizations =
      await Organization.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      data: organizations,
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
  createOrganization,
  getOrganizations,
};