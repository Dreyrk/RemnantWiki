import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    pseudo: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    saved: { type: Array },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

export default user;
