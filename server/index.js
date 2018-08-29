var express = require('express');
var db = require('./db');
var parser = require('body-parser');
var path = require('path');
var PORT = 3000;
var app= express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))

app.use('/api', routes);

app.use(express.statistic(path.resolve(__dirname, '../static')));

app.listen(PORT, () =>{
  console.log('Listening on port: ', PORT);
});



// // Router
// var router = require('./routes.js');

// var app = express();
// module.exports.app = app;

// // Set what we are listening on.
// app.set('port', 3000);

// // Logging and parsing
// app.use(morgan('dev'));
// app.use(parser.json());

// // Serve the client files
// app.use(express.static(__dirname + '/../client'));

// // If we are being run directly, run the server.
// app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
