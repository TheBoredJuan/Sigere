const mongoose =require('mongoose');
const { Schema } = mongoose;

const EspRequirement = new Schema({
    idP : String,
	specification : String,
	priority : Number,
	id : String,
    description : String,
    author : String,
    source : String,
    creationDate : String,
    actors : String,
    preconditions : String,
    postconditions : String,
    flow : String,
    altFlow : String,
    exceptions : String
});

module.exports = mongoose.model('EspRequirement',EspRequirement);