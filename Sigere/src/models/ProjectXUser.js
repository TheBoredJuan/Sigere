const mongoose =require('mongoose');
const { Schema } = mongoose;

const ProjectXUser = new Schema({
    idP : String,
    idU : String
});

module.exports = mongoose.model('ProjectXUser',ProjectXUser);