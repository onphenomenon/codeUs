var express = require('express');

var app = express();

require('./server/config/middleware.js')(app, express);

module.exports = app;


app.set('port', process.env.PORT || 8000);


app.listen(app.get('port'));


