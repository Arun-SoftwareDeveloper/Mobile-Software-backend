const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DataBase = require("./DataBase/ConfigDB");
const AppRoutes = require("./Routes/AppRoutes");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
DataBase();

app.use("/app", AppRoutes);

const PORT = process.env.PORT || 3000; // Added default port
app.listen(PORT, () => {
  console.log(`Application is listening on Port ${PORT}`);
});
