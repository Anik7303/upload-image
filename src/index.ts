import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// configure environment variables
if (process.env.NODE_ENV !== "production") dotenv.config();

// database configuration
import "./database";

// database model declarations
import "./models";

// variables
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "5000";
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/test";

// middlewares
import { customErrorMiddleware, error404 } from "./middlewares";

// routes
import { uploadRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", uploadRoutes);
app.use(error404);
app.use(customErrorMiddleware);

const server = app.listen(parseInt(PORT), HOST, () => {
  console.log(`server address: http://${HOST}:${PORT}`);
  mongoose.connect(DB_URI);
});

// log error
server.on("error", (err) => {
  console.error(err);
});
