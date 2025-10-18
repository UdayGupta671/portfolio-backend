import user from "../models/user.js";

// @desc Create a new user
// @route POST /api/users
export const createUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all users
// @route GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a user by ID
// @route GET /api/users/:id
export const getUserById = async (req, res) => {
  try {
    const findUser = await user.findById(req.params.id);
    if (!findUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: findUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};  

// @desc Update a user by ID
// @route PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a user by ID
// @route DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: "User not found" });
  }
};          

// @desc Delete all users
// @route DELETE /api/users
export const deleteAllUsers = async (req, res) => {
  try {
    const result = await user.deleteMany({}); // remove all documents
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} user(s)`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};