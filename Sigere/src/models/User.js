const mongoose =require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
	name : String,
	lastname : String,
    username : String,
    email : {type:String,unique:true},
    password : String
});

module.exports = mongoose.model('User',User);