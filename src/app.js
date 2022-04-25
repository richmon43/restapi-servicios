// Modulos
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Dependencias
import servicios from "./routes/servicios";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// middlewares
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "welcom to my application" });
});

app.use("/api/services", servicios);

export default app;
