import mongoose from "mongoose";

mongoose.connection.on("connected", (): void => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (error): void => {
  console.error(error);
});
