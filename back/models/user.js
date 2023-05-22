import mongoose from "mongoose";

const BuildSchema = mongoose.Schema(
  {
    name: { type: String },
    head: { type: Object },
    body: { type: Object },
    legs: { type: Object },
    ring1: { type: Object },
    ring2: { type: Object },
    amulet: { type: Object },
    primary: { type: Object },
    secondary: { type: Object },
    melee: { type: Object },
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    pseudo: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    saved: { builds: [BuildSchema], items: { type: Array } },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

export default user;
