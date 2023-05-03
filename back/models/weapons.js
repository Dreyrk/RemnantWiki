import mongoose from "mongoose";

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
  weaponMod: { type: String },
});

const weapons = mongoose.model("weapons", weaponSchema);

export default weapons;
