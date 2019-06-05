const mongoose =require('mongoose');
const { Schema } = mongoose;

const Project = new Schema({
    idMaster: String,
    name : String,
	description : String,
    client : String,
    date : String
});

module.exports = mongoose.model('Project',Project);