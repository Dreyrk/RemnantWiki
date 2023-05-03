import mongoose from "mongoose";

const armorSetSchema = mongoose.Schema({
  name: { type: String, required: true },
  setBonus: { type: String },
  img: { type: String },
  worlds: { type: String },
});

const armorSets = mongoose.model("armorSets", armorSetSchema);

export default armorSets;
