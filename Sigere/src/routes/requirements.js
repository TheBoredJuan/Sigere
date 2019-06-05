const express = require('express');
const router = express.Router();

const Requirement = require('../models/Requirement');

router.get('/api/requirements', async (req,res) => {
	const requirements = await Requirement.find();
	res.json(requirements);
});

router.get('/api/requirements/sp/:id', async (req,res) => {
	const requirements = await Requirement.find({idP:req.params.id});
	res.json(requirements);
});

router.get('/api/requirements/sp/rnf/:id', async (req,res) => {
	const requirements = await Requirement.find({idP:req.params.id,type:'RNF'});
	res.json(requirements);
});


router.post('/api/requirements', async (req,res) => {
	const requirement = new Requirement(req.body)
	 await requirement.save();
	 res.json({
	 	status : 'Requirement Saved'
	 });
});

router.get('/api/requirements/:id', async(req,res) => {
	const requirement = await Requirement.findById(req.params.id);
	res.json(requirement);
});

router.put('/api/requirements/:id', async (req,res) => {
	await Requirement.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'Requirement Updated'
	});
});

router.delete('/api/requirements/:id', async (req,res) => {
	await Requirement.findByIdAndRemove(req.params.id);
	res.json({
		status: 'Requirement Deleted'
	});
});

router.delete('/api/requirements/dp/:id', async (req,res) => {
	await Requirement.deleteMany({idP:'req.params.id'});
	res.json({
		status: 'Requirement Deleted'
	});
});
module.exports = router;