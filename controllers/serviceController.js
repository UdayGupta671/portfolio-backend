import service from "../models/service.js";

// @desc Create a new service
// @route POST /api/services
export const createService = async (req, res) => {
  try {
    const newService = new service(req.body);
    await newService.save();
    res.status(201).json({ success: true, data: newService });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all services
// @route GET /api/services
export const getServices = async (req, res) => {
  try {
    const services = await service.find();
    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a service by ID                    
// @route GET /api/services/:id
export const getServiceById = async (req, res) => {
  try {
    const findService = await service.findById(req.params.id);
    if (!findService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, data: findService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// @desc Update a service by ID
// @route PUT /api/services/:id
export const updateService = async (req, res) => {
  try {
    const updatedService = await service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, data: updatedService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a service by ID
// @route DELETE /api/services/:id
export const deleteService = async (req, res) => {
  try {
    await service.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Service not found" });
  }
};

// @desc Delete all services
// @route DELETE /api/services
export const deleteAllServices = async (req, res) => {
  try {
    const result = await service.deleteMany({});
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} service(s)`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};  