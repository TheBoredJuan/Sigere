const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

router.get('/api/users', async (req,res) => {
	const user = await User.find();
	res.json(user);
});

router.post('/api/users', async (req,res) => {
	const user = new User(req.body)
	 await user.save();
	 res.json({
	 	status : 'User Saved'
	 });
});

router.get('/api/users/:id', async(req,res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
});

router.get('/api/users/fp/:id', async(req,res) => {
	const user = await User.find({email:req.params.id});
	res.json(user);
});

router.put('/api/users/:id', async (req,res) => {
	await User.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'User Updated'
	});
});

router.delete('/api/users/:id', async (req,res) => {
	await User.findByIdAndRemove(req.params.id);
	res.json({
		status: 'User Deleted'
	});
});
module.exports = router;