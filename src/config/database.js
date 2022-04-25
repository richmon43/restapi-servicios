import mongoose from "mongoose";
require("dotenv").config({ path: ".env" });

(async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE);
    console.log("    MongoDB is:", db.connection.name);
    console.log("=================================");
  } catch (error) {
    console.log(error.msg);
  }
})();
