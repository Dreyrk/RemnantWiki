import mongoose from "mongoose";

const enemySchema = mongoose.Schema({
  name: { type: String },
  img: { type: String },
  location: { type: String },
  link: { type: String },
});

const enemy = mongoose.model("enemy", enemySchema);

export default enemy;
