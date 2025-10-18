// Contact Controller - handles CRUD for Contacts
import Contact from "../models/contact.js";

// @desc Create a new contact message
// @route POST /api/contacts
export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body); // Create new contact using request body
    await contact.save(); // Save to MongoDB
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all contact messages
// @route GET /api/contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); // Get all contacts
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// @route GET /api/contacts/:id
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a contact by ID
// @route DELETE /api/contacts/:id
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id); // Delete by ID
    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Contact not found" });
  }
};
export const deleteAllContacts = async (req, res) => {
  try {
    const result = await Contact.deleteMany({}); // remove all documents
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} contact(s)`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};