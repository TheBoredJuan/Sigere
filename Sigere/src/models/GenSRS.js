const mongoose =require('mongoose');
const { Schema } = mongoose;

const GenSRS = new Schema({
    idP : String,
    proposit : String,
    scope : String,
	glosary : String,
    references : String,
    perspective : String,
    sysInterfaces : String,
    userInterfaces : String,
    hwInterfaces : String,
    swInterfaces : String,
    comInterfaces : String,
    userChar : String,
    productFunc : String,
    restrictions : String,
    dependencies : String,
    externalInterfaces : String,
    devRequirements : String,
    dbRequirements : String,
    designRestrictions : String
});

module.exports = mongoose.model('GenSRS',GenSRS);