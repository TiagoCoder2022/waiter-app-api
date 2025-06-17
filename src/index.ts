import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import path from "node:path";

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    const app = express();

    // Serve static files from the uploads directory
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    app.use(express.json());
    app.use(router);

    app.listen(3003, () => {
      console.log("Server is running on port 3003");
    });
  })
  .catch(() => console.log("erro ao conectar ao mongo"));


