import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

import blogRoutes from "./routes/blog.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use("/api", blogRoutes);

app.listen(process.env.PORT, async () => {
    console.log("Serveur lancé");
});