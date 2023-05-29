import mongoose from "mongoose";

const amuletSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  img: { type: String },
  worlds: { type: String },
  section: { type: String, required: true, default: "amulets" },
});

const amulet = mongoose.model("amulet", amuletSchema);

export default amulet;
