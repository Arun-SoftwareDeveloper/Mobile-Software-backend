const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const dbURL = process.env.DBURL;

const DBConnection = async () => {
  try {
    const connection = await mongoose.connect(dbURL);
    console.log(`MongoDB connected Successfully`);
  } catch (error) {
    console.log(`Error in connectiong MongoDB ${error}`);
  }
};

DBConnection();

module.exports = DBConnection;
