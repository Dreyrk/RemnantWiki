import mongoose from "mongoose";

const weaponSchema = mongoose.Schema({
  name: { type: String },
  baseDamage: { type: Number },
  maxDamage: { type: Number },
  rps: { type: Number },
  magazine: { type: Number },
  idealRange: { type: Number },
  maxAmmo: { type: Number },
  critChance: { type: Number },
  worlds: { type: String },
  category: { type: String },
  type: { type: String },
  img: { type: String },
  weaponMod: {
    name: { type: String },
    description: { type: String },
    worlds: { type: String },
    img: { type: String },
  },
});

const BuildSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  head: { type: Object },
  body: { type: Object },
  legs: { type: Object },
  ring1: { type: Object },
  ring2: { type: Object },
  amulet: { type: Object },
  primary: weaponSchema,
  secondary: weaponSchema,
  melee: { type: Object },
});

const builds = mongoose.model("builds", BuildSchema);

export default builds;
