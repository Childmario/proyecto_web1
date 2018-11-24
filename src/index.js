const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


//settings
app.set('views',path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middleware
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended: false}));

//router
//app.use(require('./routes/index.js'));
app.use('/api',require('./routes/tasks.js'));

//static files
app.use(express.static(path.join(__dirname, './dist/mgp1')));

//start server
app.listen(app.get('port'), ()=> {

console.log('Server on port', app.get('port'));

});