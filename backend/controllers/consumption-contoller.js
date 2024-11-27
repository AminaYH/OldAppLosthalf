const Consumption = require('../models/consumption-model');

// Get all food consumption records
exports.getAllConsumptions = async (req, res) => {
  try {
    const consumptions = await Consumption.find();
    res.status(200).json(consumptions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving consumption records', error });
  }
};

// Get a single consumption record by ID
exports.getConsumptionById = async (req, res) => {
  try {
    const consumption = await Consumption.findById(req.params.id);
    if (!consumption) {
      return res.status(404).json({ message: 'Consumption record not found' });
    }
    res.status(200).json(consumption);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving consumption record', error });
  }
};

// Add a new consumption record
exports.addConsumption = async (req, res) => {
  try {
    const newConsumption = new Consumption(req.body);
    const savedConsumption = await newConsumption.save();
    res.status(201).json(savedConsumption);
  } catch (error) {
    res.status(500).json({ message: 'Error adding consumption record', error });
  }
};

// Update a consumption record by ID
exports.updateConsumptionById = async (req, res) => {
  try {
    const updatedConsumption = await Consumption.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
    );
    if (!updatedConsumption) {
      return res.status(404).json({ message: 'Consumption record not found' });
    }
    res.status(200).json(updatedConsumption);
  } catch (error) {
    res.status(500).json({ message: 'Error updating consumption record', error });
  }
};

// Delete a consumption record by ID
exports.deleteConsumptionById = async (req, res) => {
  try {
    const deletedConsumption = await Consumption.findByIdAndDelete(req.params.id);
    if (!deletedConsumption) {
      return res.status(404).json({ message: 'Consumption record not found' });
    }
    res.status(200).json({ message: 'Consumption record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting consumption record', error });
  }
};
