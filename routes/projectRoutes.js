import express from "express";
import { createProject, getProjects,getProjectById,updateProject, deleteAllProjects,deleteProject } from "../controllers/projectController.js";

const router = express.Router();

// POST a new project
router.post("/", createProject);

// GET all projects
router.get("/", getProjects);
router.get("/:id", getProjectById);

// UPDATE project
router.put("/:id", updateProject);

// DELETE a project by ID
router.delete("/:id", deleteProject);
router.delete("/", deleteAllProjects);

export default router;
