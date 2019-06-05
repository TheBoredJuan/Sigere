const express = require('express');
const router = express.Router();

const Project = require('../models/Project.js');

router.get('/api/projects', async (req,res) => {
	const projects = await Project.find();
	res.json(projects);
});

router.post('/api/projects', async (req,res) => {
	const project = new Project(req.body)
	 await project.save();
	 res.json(project._id);
});

router.get('/api/projects/:id', async(req,res) => {
	const project = await Project.findById(req.params.id);
	res.json(project);
});

router.put('/api/projects/:id', async (req,res) => {
	await Project.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'Project Updated'
	});
});

router.delete('/api/projects/:id', async (req,res) => {
	await Project.findByIdAndRemove(req.params.id);
	res.json({
		status: 'Project Deleted'
	});
});
module.exports = router;