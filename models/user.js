// User Model - for admin login later
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },  // Admin username
    password: { type: String, required: true },  // Admin password (plain for now)
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
