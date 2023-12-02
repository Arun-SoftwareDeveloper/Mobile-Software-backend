const App = require("../Models/AppModel");
const appData = require("../appData"); // Corrected path

const getAllApps = async (req, res) => {
  try {
    // Return the appData directly instead of fetching from the database
    return res.status(200).json(appData);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const getAppsById = async (req, res) => {
  // Corrected function name
  try {
    // Try to find the app in the appData using the provided ID
    const app = appData.find((item) => item.id === req.params.id);

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    return res.status(200).json(app);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports = { getAllApps, getAppsById }; // Corrected function name
