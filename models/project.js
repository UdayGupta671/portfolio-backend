// Project Model - stores portfolio projects
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },         
    description: { type: String, required: true },   
    completion: { type: Date },                                          
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
