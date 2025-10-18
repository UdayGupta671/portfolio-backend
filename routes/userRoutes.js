import express from "express";
import { createUser, getUsers,getUserById,updateUser, deleteAllUsers,deleteUser } from "../controllers/userController.js";

const router = express.Router();

// POST a new user
router.post("/", createUser);

// GET all user 
router.get("/", getUsers);
router.get("/:id", getUserById);

//UPDATE user
router.put("/:id", updateUser);
// DELETE a user by ID
router.delete("/:id", deleteUser);
router.delete("/", deleteAllUsers);

export default router;