const axios = require("axios");
const crypto = require("crypto");

const cloudinaryConfig = {
    appName: "dwrxegpgq",
    apiKey: "543621596769467",
    apiSecret: "RP-iGBC9_VTyH75WGFlwnyEF0Ag",
};

const getImageExistsOrNot = async (req, res) => {
  const { fileHash } = req.params;

  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.appName}/resources/image`,
      {
        params: {
          type: "upload", // Specify type to avoid missing parameter error
          prefix: fileHash,
          max_results: 1,
        },
        auth: {
          username: cloudinaryConfig.apiKey,
          password: cloudinaryConfig.apiSecret,
        },
      }
    );

    if (response.data.resources && response.data.resources.length > 0) {
      return res.json({ secure_url: response.data.resources[0].secure_url });
    }

    res.json({ secure_url: null });
  } catch (error) {
    console.error("Error checking image existence on Cloudinary:", error.response?.data || error.message);
    res.status(500).json({ error: "Error checking image", details: error.response?.data || error.message });
  }
};

module.exports = getImageExistsOrNot;
