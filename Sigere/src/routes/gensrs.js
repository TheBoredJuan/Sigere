const express = require('express');
const router = express.Router();

const GenSRS = require('../models/GenSRS.js');

router.get('/api/srs', async (req,res) => {
	const gensrs = await GenSRS.find();
	res.json(gensrs);
});

router.post('/api/srs', async (req,res) => {
	const gensrs = new GenSRS(req.body)
	 await gensrs.save();
	 res.json({
	 	status : 'GenSRS Saved'
	 });
});

router.get('/api/srs/sp/:id', async (req,res) => {
	const gensrs = await GenSRS.find({idP:req.params.id});
	res.json(gensrs);
});

router.get('/api/srs/:id', async(req,res) => {
	const gensrs = await GenSRS.findById(req.params.id);
	res.json(gensrs);
});

router.put('/api/srs/:id', async (req,res) => {
	await GenSRS.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'GenSRS Updated'
	});
});

router.delete('/api/srs/:id', async (req,res) => {
	await GenSRS.findByIdAndRemove(req.params.id);
	res.json({
		status: 'GenSRS Deleted'
	});
});
module.exports = router;