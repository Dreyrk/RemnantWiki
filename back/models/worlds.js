import mongoose from "mongoose";

const worldSchema = mongoose.Schema({
  name: { type: String },
  img: { type: String },
  description: { type: String },
  steps: { type: Array },
});

const worlds = mongoose.model("worlds", worldSchema);

export default worlds;
