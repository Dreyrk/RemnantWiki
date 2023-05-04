import mongoose from "mongoose";

const armorSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ["body", "head", "legs", "other"],
    default: "other",
    required: true,
  },
  baseArmor: { type: Number },
  maxArmor: { type: Number },
  weight: { type: Number },
  bleed: { type: Number },
  fire: { type: Number },
  rot: { type: Number },
  radiation: { type: Number },
  corrosive: { type: Number },
  shock: { type: Number },
  armorSet: { type: String },
  worlds: { type: String },
  img: { type: String },
});

const armors = mongoose.model("armors", armorSchema);

export default armors;
