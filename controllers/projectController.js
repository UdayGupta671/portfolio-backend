import Project from "../models/project.js";

// @desc Create a new project
// @route POST /api/projects
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all projects
// @route GET /api/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a project by ID
// @route GET /api/projects/:id
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update a project by ID
// @route PUT /api/projects/:id
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a project by ID
// @route DELETE /api/projects/:id
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Project not found" });
  }
};

// @desc Delete all projects
// @route DELETE /api/projects
export const deleteAllProjects = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} project(s)`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
