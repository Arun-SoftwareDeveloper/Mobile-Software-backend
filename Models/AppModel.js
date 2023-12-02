const mongoose = require("mongoose");

// Define the schema for the app
const appSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  appName: {
    type: String,
    required: true,
  },
  appImageUrl: {
    type: String,
    required: true,
  },
  appVideoUrl: {
    type: String,
    required: true,
  },
  icon: {
    prefix: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: false,
    },
  },
  appUrl: {
    type: String,
  },
});

// Create a model based on the schema
const App = mongoose.model("App", appSchema);

module.exports = App;
