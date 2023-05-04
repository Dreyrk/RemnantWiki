import mongoose from "mongoose";

const ringSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  worlds: { type: String },
});

const ring = mongoose.model("ring", ringSchema);

export default ring;
