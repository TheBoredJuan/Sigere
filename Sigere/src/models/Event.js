const mongoose =require('mongoose');
const { Schema } = mongoose;

const Event = new Schema({
    idP: String,
    name : String,
	description : String,
    date : String
});

module.exports = mongoose.model('Event', Event);