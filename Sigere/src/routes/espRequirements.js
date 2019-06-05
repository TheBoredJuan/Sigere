const express = require('express');
const router = express.Router();

const EspRequirement = require('../models/EspRequirement');

router.get('/api/espRequirements', async (req,res) => {
	const espRequirements = await EspRequirement.find();
	res.json(espRequirements);
});

router.get('/api/espRequirements/sp/:id', async (req,res) => {
	const espRequirements = await EspRequirement.find({idP:req.params.id});
	res.json(espRequirements);
});

router.post('/api/espRequirements', async (req,res) => {
	const espRequirement = new EspRequirement(req.body)
	 await espRequirement.save();
	 res.json({
	 	status : 'Specification Requirement Saved'
	 });
});
router.get('/api/espRequirements/:id', async(req,res) => {
	const espRequirement = await EspRequirement.findById(req.params.id);
	res.json(espRequirement);
});

router.put('/api/espRequirements/:id', async (req,res) => {
	await EspRequirement.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'Specification Requirement Updated'
	});
});

router.delete('/api/espRequirements/:id', async (req,res) => {
	await EspRequirement.findByIdAndRemove(req.params.id);
	res.json({
		status: 'Specification Requirement Deleted'
	});
});
module.exports = router;