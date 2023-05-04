import mongoose from "mongoose";

const armorSetSchema = mongoose.Schema({
  name: { type: String, required: true },
  setBonus: { type: String },
  img: { original: { type: String }, skin: { type: Array } },
  worlds: { type: String },
});

const armorSet = mongoose.model("armorSet", armorSetSchema);

export default armorSet;
