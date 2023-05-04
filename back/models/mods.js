import mongoose from "mongoose";

const modsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  worlds: { type: String },
});

const mods = mongoose.model("mods", modsSchema);

export default mods;
