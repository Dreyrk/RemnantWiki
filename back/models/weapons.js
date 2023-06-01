import mongoose from "mongoose";

const weaponModSchema = mongoose.Schema({
  name: { type: String },
  img: { type: String },
  description: { type: String },
});

const weaponSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ["primary", "secondary", "melee", "weapon"],
    default: "weapon",
    required: true,
  },
  baseDamage: { type: Number },
  maxDamage: { type: Number },
  rps: { type: Number },
  magazine: { type: Number },
  idealRange: { type: Number },
  maxAmmo: { type: Number },
  critChance: { type: Number },
  worlds: { type: String },
  img: { type: String },
  type: {
    type: String,
    enum: [
      "shock",
      "radiation",
      "corrosive",
      "rot",
      "fire",
      "frost",
      "normal",
      "explosive",
      "other",
    ],
    default: "normal",
    required: true,
  },
  weaponMod: weaponModSchema,
  section: { type: String, required: true, default: "weapons" },
});

const weapons = mongoose.model("weapons", weaponSchema);

export default weapons;
