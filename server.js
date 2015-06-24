var express = require('express');

var app = express();

require('./server/config/middleware.js')(app, express);

module.exports = app;

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
});

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});


