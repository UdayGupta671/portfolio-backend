import express from "express";
import dotenv from "dotenv";
import createError from "http-errors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Portfolio Backend API 🚀" });
});

// Error Handler
app.use((req, res, next) => {
  next(createError(404, "Route Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
