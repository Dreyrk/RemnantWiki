import mongoose from "mongoose";

const achievementSchema = mongoose.Schema({
  name: { type: String },
  unlock: { type: String },
  dlc: { type: String },
  description: { type: String },
  img: { type: String },
});

const achievement = mongoose.model("achievement", achievementSchema);

export default achievement;
