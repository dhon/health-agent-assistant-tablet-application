// Skeleton/Comments by Tim Richards
var express    = require('express');
var handlebars = require('express-handlebars');
// The body parser is used to parse the body of an HTTP request.
var bodyParser = require('body-parser');
// Require session library.
var session    = require('express-session');
// Require flash library.
var flash      = require('connect-flash');
// The cookie parser is used to parse cookies in an HTTP header.
var cookieParser = require('cookie-parser');
// Morgan for server logging.
var morgan = require('morgan');
// Create the app:
var app = express();
// Set the port number:
app.set('port', 3000);
//// Start Middleware Setup
// Static File Serving:
app.use(express.static(__dirname + '/public'));

// View Engine:
var view = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', view.engine);
app.set('view engine', 'handlebars');

// Body Parser:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cookie Parser:
app.use(cookieParser());

// Session Support:
app.use(session({
  secret: 'octocat',
  // Both of the options below are deprecated, but should be false
  // until removed from the library - sometimes, the reality of
  // libraries can be rather annoying!
  saveUninitialized: false, // does not save uninitialized session.
  resave: false             // does not save session if not modified.
}));

// Flash Support.
app.use(flash());

//// End Middleware Setup




//// Begin User Routes

// This adds the external router defined routes to the app.
// Note: this includes a prefix to each of those routes.
//       Example: /mapping/, /data/, ...
app.use('/data', require('./routes/data-routes'));
app.use('/mapping', require('./routes/mapping-routes'));
app.use('/searching', require('./routes/searching-routes'));
//// End User Routes

////**************************************************************
//// API calls to and from database
function addLocation(location){
	$.ajax({
	  type: "POST",
	  url: './api/add',
	  data: location,
	  success: function(msg){
     	alert('Success ' + msg);
   	  },
	  dataType: "json"
	});
}

function editLocation(location, id){
	$.ajax({
	  type: "POST",
	  url: './api/edit',
	  data: {
	  	'location': location.location,
	  	'type': location.type,
	  	'Name': location.name,
	  	'Address': location.address,
	  	'Telephone': location.telephone,
	  	'Owner': location.owner,
	  	'Person': location.person,
	  	'id': location.id
	  },
	  success: function(msg){
     	alert('Success ' + msg);
   	  },
	  dataType: "json"
	});
}

function removeLocation(location){
	$.ajax({
	  type: "POST",
	  url: './api/remove',
	  data: {
	  	'location': location.location,
	  	'type': location.type,
	  	'id': location.id
	  },
	  success: function(msg){
     	alert('Success ' + msg);
   	  },
	  dataType: "json"
	});
}

function getLocation(location){
	$.ajax({
	  type: "GET",
	  url: './api/get',
	  data: location,
	  success: function(msg){
     	alert('Success ' + msg);
   	  },
	  dataType: "json"
	});
}

function getDatabase(location){
	$.ajax({
	  type: "GET",
	  url: './api/database',
	  data: location.location,
	  success: function(msg){
     	alert('Success ' + msg);
   	  },
	  dataType: "json"
	});
}

////**************************************************************

//// Server Startup
app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' +
              app.get('port') + '; press Ctrl-C to terminate');
});
