import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
