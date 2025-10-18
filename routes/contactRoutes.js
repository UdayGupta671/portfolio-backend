// Contact Routes - maps HTTP routes to controller functions
import express from "express";
import { createContact, getContacts,getContactById,updateContact, deleteAllContacts,deleteContact } from "../controllers/contactController.js";

const router = express.Router();

// POST a new contact message
router.post("/", createContact);

// GET all contact messages
router.get("/", getContacts);
router.get("/:id", getContactById);

//UPDATE contact
router.put("/:id", updateContact);
// DELETE a contact by ID
router.delete("/:id", deleteContact);
router.delete("/", deleteAllContacts);

export default router;
