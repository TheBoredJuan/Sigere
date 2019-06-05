const mongoose =require('mongoose');
const { Schema } = mongoose;

const Requirement = new Schema({
	type : String,
	idP: String,
	number : {type:Number, unique:false}, 
	category : String,
	description : String,
	idProject : String
});

module.exports = mongoose.model('Requirement',Requirement);