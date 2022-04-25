import app from "./app";
import "./config/database";

app.listen(app.get("port"), (req, res) => {
  console.log("=================================");
  console.log(" Server is running on port:", app.get("port"));
  console.log("=================================");
});
