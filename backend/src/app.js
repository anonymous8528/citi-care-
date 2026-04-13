import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import issueRoutes from "./routes/issueRoutes.js";

const app = express();

// Middleware
app.use(cors({
    origine: "http://localhost:5000",
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;