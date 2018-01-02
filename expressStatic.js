var express = require('express');
var path = require('path');
var app = express();

app.set('port', 8360);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
