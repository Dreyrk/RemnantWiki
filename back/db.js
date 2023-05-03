import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.URI || "mongodb://127.0.0.1:27017/remnantdb";

async function main() {
  await mongoose.connect(uri);
}

export default main;
