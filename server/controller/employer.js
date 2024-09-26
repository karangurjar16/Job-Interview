const Employer = require("../models/employer"); // Changed to 'JobSeeker' to match the model name
const { response } = require("express");
const mongoose = require('mongoose');

exports.createEmployee=async (req, res) => {
    try {
        const employer = new Employer(req.body);
        await employer.save();
        res.status(201).json(employer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllEmployee=async (req, res) => {
    try {
        const employers = await Employer.find().populate('userId').populate('jobsPosted');
        res.status(200).json(employers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// exports.getEmployerById = async (req, res) => {
//     try {
//         const { id } = req.params; // Extract id from request parameters
        
//         // Find the employer by id
//         const employer = await Employer.findById(id);
//         if (!employer) return res.status(404).json({ error: 'Employer not found' });

//         res.status(200).json(employer);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

exports.getEmployerByUserId = async (req, res) => {
    try {
        const { id } = req.params; // Extract userId from request parameters


        const employer = await Employer.findOne({ userId: id });
        if (!employer) return res.status(404).json({ error: 'Employer not found' });

        res.status(200).json(employer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};






exports.updateEmployee= async (req, res) => {
    try {
        const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employer) return res.status(404).json({ error: 'Employer not found' });
        res.status(200).json(employer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEmployee=async (req, res) => {
    try {
        const employer = await Employer.findByIdAndDelete(req.params.id);
        if (!employer) return res.status(404).json({ error: 'Employer not found' });
        res.status(200).json({ message: 'Employer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}