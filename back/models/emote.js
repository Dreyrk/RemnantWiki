import mongoose from "mongoose";

const emoteSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  worlds: { type: String },
});

const emote = mongoose.model("emote", emoteSchema);

export default emote;
