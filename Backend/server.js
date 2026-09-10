import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import formRoute from "./routes/formRoute.js";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", formRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
