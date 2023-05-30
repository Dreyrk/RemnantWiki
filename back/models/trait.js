import mongoose from "mongoose";

const traitSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  worlds: { type: String },
  unlock: { type: String },
  base: { type: String },
  max: { type: String },
});

const trait = mongoose.model("trait", traitSchema);

export default trait;
