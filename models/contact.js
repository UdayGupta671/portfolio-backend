// Contact Model - stores messages from the Contact Form
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true }, // User's first name
    lastName: { type: String, required: true },  // User's last name
    email: { type: String, required: true },     // Email address
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
