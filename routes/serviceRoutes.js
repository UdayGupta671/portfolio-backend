import express from "express";
import { createService, getServices,getServiceById,updateService, deleteAllServices,deleteService } from "../controllers/serviceController.js";

const router = express.Router();

// POST a new service
router.post("/", createService);

// GET all services
router.get("/", getServices);
router.get("/:id", getServiceById);

//UPDATE service
router.put("/:id", updateService);
// DELETE a service by ID
router.delete("/:id", deleteService);
router.delete("/", deleteAllServices);

export default router;