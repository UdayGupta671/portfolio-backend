// Service Model - stores developer services
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },         // Service title
    description: { type: String, required: true },   // Service details
                        
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
