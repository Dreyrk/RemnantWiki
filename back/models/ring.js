import mongoose from "mongoose";

const ringSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  worlds: { type: String },
  section: { type: String, required: true, default: "rings" },
});

const ring = mongoose.model("ring", ringSchema);

export default ring;
