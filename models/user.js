// User Model - for admin login later
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },  // Admin username
    lastname: { type: String, required: true },  // Admin password (plain for now)
 email: { type: String, required: true },     // Admin email
 password: { type: String, required: true },  // Admin password (hashed later)
 created: { type: Date, required: true},
 updated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
