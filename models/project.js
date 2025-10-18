// Project Model - stores portfolio projects
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },         // Project title
    description: { type: String, required: true },   // Description
    image: { type: String },                         // Image URL or file path
    githubLink: { type: String },                    // GitHub repository URL
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
