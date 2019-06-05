const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/sigere-database')
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err));
//Settings
app.set('port', 8080);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/requirements.js'));
app.use(require('./routes/projects.js'));
app.use(require('./routes/espRequirements.js'))
app.use(require('./routes/users.js'))
app.use(require('./routes/projectsxusers.js'))
app.use(require('./routes/gensrs.js'))
app.use(require('./routes/events.js'))
//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
	console.log('Server en puerto: ', app.get('port'));
});