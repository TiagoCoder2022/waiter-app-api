import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(router);

    app.listen(3003, () => {
      console.log("Server is running on port 3003");
    });
  })
  .catch(() => console.log("erro ao conectar ao mongo"));


