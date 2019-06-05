const express = require('express');
const router = express.Router();

const Event = require('../models/Event.js');

router.get('/api/events', async (req,res) => {
	const event = await Event.find();
	res.json(event);
});

router.post('/api/events', async (req,res) => {
	const event = new Event(req.body)
	 await event.save();
	 res.json({
	 	status : 'Event Saved'
	 });
});

router.get('/api/events/sp/:id', async (req,res) => {
	const event = await Event.find({idP:req.params.id});
	res.json(event);
});

router.get('/api/events/:id', async(req,res) => {
	const event = await Event.findById(req.params.id);
	res.json(event);
});

router.put('/api/events/:id', async (req,res) => {
	await Event.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'Event Updated'
	});
});

router.delete('/api/events/:id', async (req,res) => {
	await Event.findByIdAndRemove(req.params.id);
	res.json({
		status: 'Event Deleted'
	});
});
module.exports = router;