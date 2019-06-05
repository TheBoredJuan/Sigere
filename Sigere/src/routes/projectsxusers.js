const express = require('express');
const router = express.Router();

const ProjectXUser = require('../models/ProjectXUser.js');

router.get('/api/projectsxusers', async (req,res) => {
	const projectsxusers = await ProjectXUser.find();
	res.json(projectsxusers);
});

router.get('/api/projectsxusers/su/:id', async (req,res) => {
	const projectsxusers = await ProjectXUser.find({idU:req.params.id});
	res.json(projectsxusers);
});

router.get('/api/projectsxusers/sp/:id', async (req,res) => {
	const projectsxusers = await ProjectXUser.find({idP:req.params.id});
	res.json(projectsxusers);
});

router.post('/api/projectsxusers', async (req,res) => {
	const projectxuser = new ProjectXUser(req.body)
	 await projectxuser.save();
	 res.json({
	 	status : 'ProjectXUser Saved'
	 });
});

router.get('/api/projectsxusers/:id', async(req,res) => {
	const projectxuser = await ProjectXUser.findById(req.params.id);
	res.json(projectxuser);
});

router.put('/api/projectsxusers/:id', async (req,res) => {
	await ProjectXUser.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'ProjectXUser Updated'
	});
});

router.delete('/api/projectsxusers/:id', async (req,res) => {
	await ProjectXUser.findByIdAndRemove(req.params.id);
	res.json({
		status: 'ProjectXUser Deleted'
	});
});

router.delete('/api/projectsxusers/dp/:id', async (req,res) => {
	await ProjectXUser.deleteMany({idP:req.params.id});
	res.json({
		status: 'ProjectXUser Deleted'
	});
});

router.delete('/api/projectsxusers/du/:id/dp/:idP', async (req,res) => {
	await ProjectXUser.deleteOne({idP:req.params.idP,idU:req.params.id});
	res.json({
		status: 'ProjectXUser Deleted'
	});
});
module.exports = router;