import mongoose from "mongoose";

const bossSchema = mongoose.Schema({
  name: { type: String },
  location: { type: String },
  img: { type: String },
  link: { type: String },
});

const boss = mongoose.model("boss", bossSchema);

export default boss;
